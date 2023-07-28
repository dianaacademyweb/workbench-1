import React from 'react'
import EmployeeProfile from './EmployeeProfile'
import LocationTime from './LocationTime'
import LogsSection from './LogsSection'
import BulletinBoard from './BulletinBoard'
import MyCalendar from './MyCalender'

const EmployeeDash = () => {
  return (
    <div>
        <EmployeeProfile/>
        <LocationTime/>
        <LogsSection/>
        <BulletinBoard/>
        <MyCalendar/>
    </div>
  )
}

export default EmployeeDash