import React from 'react'
import {useUser} from '@clerk/clerk-react'
import { FinancialRecordForm } from './FinancialRecordForm';
import { FinancialRecordList } from './FinancialRecordList';

export const Dashboard = () => {
    const{user} = useUser();
  return (
    <>
    <div className='dashboard-container'>
    <h2>
    Welcome {user?.firstName} Here Are Your Finances!
    </h2>
    <FinancialRecordForm/>
    <FinancialRecordList/>
    </div>
    </>
  )
}
