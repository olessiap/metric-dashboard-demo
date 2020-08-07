import React, { useContext} from 'react'
import Axios from 'axios'
import { DashboardContext } from '../../contexts/DashboardContext'
import { DateRangePicker, defaultStaticRanges, createStaticRanges} from 'react-date-range'
import { domain } from "../App/App"
import Modal from 'react-bootstrap/Modal';
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import '../../styles/components/_calendar.scss'

import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  addYears
} from "date-fns";

const defineds = {
  startOfWeek: startOfWeek(new Date()),
  endOfWeek: endOfWeek(new Date()),
  startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfToday: startOfDay(new Date()),
  startOfLastSevenDay: startOfDay(addDays(new Date(), -7)),
  startOfLastFourteenDay:startOfDay(addDays(new Date(), -14)),
  startOfLastThirtyDay: startOfDay(addDays(new Date(), -30)),
  startOfLastNintyDay: startOfDay(addDays(new Date(), -90)),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfMonth: startOfMonth(new Date()),
  endOfMonth: endOfMonth(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  endOfYear: endOfYear(new Date()),
  startOflastYear: startOfYear(addYears(new Date(), -1)),
  endOflastYear: endOfYear(addYears(new Date(), -1))
};

const sideBarOptions = () => {
  const customDateObjects = [
    {
      label: "HOY",
      range: () => ({
        startDate: defineds.startOfToday,
        endDate: defineds.endOfToday
      })
    },
    {
      label: "ESTA SEMANA",
      range: () => ({
        startDate: defineds.startOfLastSevenDay,
        endDate: defineds.endOfToday
      })
    },
    {
      label: "SEMANA PASADA",
      range: () => ({
        startDate: defineds.startOfLastFourteenDay,
        endDate: defineds.startOfLastSevenDay
      })
    },
    {
      label: "MES PASADO",
      range: () => ({
        startDate: defineds.startOfLastThirtyDay,
        endDate: defineds.endOfToday
      })
    },
  ];

  return customDateObjects;
};

const DatePickerModal = props => {
  const { globalData, dispatch } = useContext(DashboardContext)
  
  const sideBar = sideBarOptions();

  const staticRanges = [
    // ...defaultStaticRanges,
    ...createStaticRanges(sideBar)
  ];

  function sendRequest() {
    props.handleClose()
    dispatch({ type: "TOGGLE_MODAL" })
    
    //make new dashboard fetch call
    Axios.post(domain + 'Dashboard/Data', {
      "UserId": globalData.loginData.userId,
      "FromDate":globalData.dateRange[0].startDate.toISOString(), 
      "ToDate":globalData.dateRange[0].endDate.toISOString(),  
      "RouterIds":JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
    },
    {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
    })
    .then((response) => {
      console.log("fetching after date selection")
      dispatch({ type:'FETCH_SUCCESS_DASHBOARD', payload:response.data })
    }, (error) => {
      dispatch({ type:'FETCH_ERROR_DASHBOARD', })
      alert(error)
    })
  }
  return (
    <Modal dialogClassName="calendar-modal"
      {...props}
      show={props.show} 
      onHide={props.handleClose} 
      animation={false} 
      className="Router-Modal">
      <DateRangePicker 
        onChange={item => dispatch({ type: 'CHANGE_DATE_RANGE', payload:[item.selection]})}
        ranges={globalData.dateRange}
        showSelectionPreview={true}
        staticRanges={staticRanges}
        inputRanges={[]}
        maxDate={new Date()}
        minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 10))}
      />
      <button className="aplicar-button" type="submit" onClick={sendRequest}>APLICAR</button>
    </Modal>
  )
}

export default DatePickerModal