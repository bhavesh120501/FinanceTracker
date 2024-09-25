import { useUser } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({children}) => {
    const [records,setRecords] = useState([]);
    const {user} = useUser();

    const fetchRecord = async () =>{
        if(!user) return;
        const response = await fetch(`http://localhost:3001/financialRecord/getAllUsersById/${user.id}`);
        if(response.ok){
            const records = await response.json();
            console.log(records);
            setRecords(records);
        }
    }

    useEffect(()=>{
        fetchRecord();
    },[user]);

    const addRecord = async(record) => {
        const res = await fetch("http://localhost:3001/financialRecord",{
            method:'POST',
            body:JSON.stringify(record),
            headers:{
                "Content-Type":'application/json'
            }
        });
        try {
            if(res.ok){
                const newRecord = await res.json();
                setRecords((prev)=>[...prev,newRecord]);
            } 
            
        } catch (error) {
            res.status(500).send(error);    
        }
    }    

    const updateRecord = async(id,newRecord) =>{
        const res = await fetch(`http://localhost:3001/financialRecord/${id}`,{
            method:'PUT',
            body:JSON.stringify(newRecord),
            headers:{
                "Content-Type":'application/json'
            }
        });
        try {
            if(res.ok){
                const newRecord = await res.json();
                setRecords((prev)=>prev.map((record)=>{
                    if(record._id === id){//id coming from FinancialRecordList 
                        return newRecord;
                    }
                    else{
                        return record;
                    }
                }));
            }
        } catch (error) {
        }
    }

    const deleteRecord = async(id) =>{
        const res = await fetch(`http://localhost:3001/financialRecord/${id}`,{
            method:'DELETE',
        });
        try {
            const deletedRecord = await res.json();
            setRecords((prev)=>prev.filter((record)=>
                record._id !== deletedRecord._id
            ));
        } catch (error) {
        }
    }

    return (
      <FinancialRecordContext.Provider value={{ addRecord , records , updateRecord, deleteRecord}}>
        {children}
      </FinancialRecordContext.Provider>
    ); 
}

