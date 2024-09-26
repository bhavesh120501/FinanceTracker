import React, { useContext, useMemo } from 'react'
import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './FinancialRecordForm';
import { FinancialRecordList } from './FinancialRecordList';
import { FinancialRecordContext } from '../../contexts/FinancialRecordContext';
import './FinancialRecord.css'

export const Dashboard = () => {
    const{user} = useUser();
    const{records} = useContext(FinancialRecordContext);

    const totalMonthly = useMemo(()=>{
      let total = 0;
      records.forEach((record)=>{
        total+=record.amount;
      })
      return total;
    },[records])

  return (
    <div className='dashboard-container'>
    <h2>
    Welcome {user?.firstName} Here Are Your Finances!
    </h2>
    <FinancialRecordForm/>
    <h3>Total Monthly Expenses : {totalMonthly}</h3>
    <FinancialRecordList/>
    </div>
  )
}
