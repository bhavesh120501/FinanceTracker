import { createContext, useState } from "react";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({children}) => {
    const [records,setRecords] = useState([]);

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

    return (
      <FinancialRecordContext.Provider value={{ addRecord , records }}>
        {children}
      </FinancialRecordContext.Provider>
    ); 
}

