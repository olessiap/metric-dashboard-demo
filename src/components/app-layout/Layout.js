import React from 'react';
import DatePickerButton from "./Header/DatePickerButton"
import TopHeader from "./Header/TopHeader"
import PDFButton from "./Header/PDFButton"
import RouterButton from "./Header/RouterButton"
import SidebarHorizontal from "./Menu/SidebarHorizontal"
import SidebarVertical from "./Menu/SidebarVertical"
import SEO from './SEO';

const Layout = ({title, hideCalendar, hideExport, hideRouters}) => {
  return(
    <>
      <SEO title={title}/>
      <TopHeader />
      <div className="menu-wrapper">
        <SidebarVertical />
        <div className="sidebar-wrapper">
          <SidebarHorizontal />
          {!hideCalendar && <DatePickerButton /> }
          {!hideRouters && <RouterButton />}
          {!hideExport && <PDFButton/>}
        </div>
      </div>
    </>
  )
}

export default Layout
