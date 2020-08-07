import React, { useContext, useState } from 'react'
import DatePickerModal from "../../modals/DatePickerModal"
import { DashboardContext } from '../../../contexts/DashboardContext'

const DatePickerButton = () => {
  const { globalData } = useContext(DashboardContext)
  const [show, setShow] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  let startUTCdate = JSON.parse(localStorage.getItem("fromDate")) !== null ? JSON.parse(localStorage.getItem("fromDate")) : globalData.dateRange[0].endDate
  let endUTCdate = JSON.parse(localStorage.getItem("toDate")) !== null ? JSON.parse(localStorage.getItem("toDate")) : globalData.dateRange[0].startDate
  let startDateFormatted = new Date(endUTCdate).getMonth()+1 + "/" + new Date(startUTCdate).getDate() + "/" + new Date(startUTCdate).getFullYear()
  let endDateFormatted = new Date(startUTCdate).getMonth()+1 + "/" + new Date(endUTCdate).getDate() + "/" + new Date(endUTCdate).getFullYear()
  
    return (
      <div className="modal-wrapper">
        <div className="menu-button" id="cal-button" onClick={handleShow}>
          <div className="menu-button-wrapper">
            <img src="./icons/calendar.svg" alt="" /> 
            <p>{startDateFormatted} - {endDateFormatted}</p>
          </div>
        </div>
        <DatePickerModal handleClose={handleClose} show={show}/>
      </div>
    )
}

export default DatePickerButton
