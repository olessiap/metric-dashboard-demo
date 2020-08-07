// import React, { useContext } from 'react'
// import Axios from 'axios'
// import { DashboardContext } from '../../contexts/DashboardContext'
// import { domain } from "../App/App"
// import Modal from 'react-bootstrap/Modal';

// const RouterModalOld = props => {
//   const { globalData, dispatch } = useContext(DashboardContext)

//   let routersFromStorage = JSON.parse(localStorage.getItem("routers"))

//   const resetAllRouters = () => {
//     let boxesChecked = document.querySelectorAll(".group")
//     for (var i = 0; i < boxesChecked.length; i++) { 
//       boxesChecked[i].checked = false
//     }
//     dispatch({ type: "RESET_ALL_ROUTERS"})
//   }

//   const hanldeSearch = e => {
//     let currentList = []
//     let newList = []
//     if(e.target.value !== "") {
//       currentList = globalData.routers ? globalData.routers : null
//       newList = currentList.filter(item => {
//         const lc = item.Hotspot.toLowerCase()
//         const filter = e.target.value.toLowerCase()
//         return lc.includes(filter)
//       })
//     } else {
//       newList = globalData.routers
//     }
//     dispatch({ type: "UPDATE_SEARCH_IN_ROUTER", payload: newList })
//   }

//   const handleFetchData = (e) => {
//     e.preventDefault()
//     props.handleClose()
//     dispatch({ type: "TOGGLE_MODAL" })
//     console.log("from routers call")
//     //PUT BACK LOGIN CHECK FOR PRODUCTION
//     // if (globalData.isLoggedIn) {
    
//     //make new dashboard fetch call
//     Axios.post(domain + 'Dashboard/Data', {
//       "UserId": globalData.loginData.userId,
//       "FromDate":globalData.dateRange[0].startDate.toISOString(), 
//       "ToDate":globalData.dateRange[0].endDate.toISOString(),  
//       "RouterIds":globalData.RouterIds ? globalData.RouterIds.join(",") : null //the router selected ids concatenated with a comma separator in a single string
//     },
//     {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
//     })
//     .then((response) => {
//       console.log("fetching after routers")
//       dispatch({ type:'FETCH_SUCCESS_DASHBOARD', payload:response.data })
//       props.handleClose()
//     }, (error) => {
//       dispatch({ type:'FETCH_ERROR_DASHBOARD', })
//       alert(error)
//       // setShowErrorMessage(true)
//     })

//     //make new map markers call
//     Axios.post(domain + 'Dashboard/RealTimeMap', {
//       "RouterIds":globalData.RouterIds ? globalData.RouterIds.join(",") : routersFromStorage.join(",")
//     },
//     {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
//     })
//     .then((response) => {
//       if(!globalData.cancelRequest) {
//         dispatch({ type:"FETCH_SUCCESS_MARKER_DATA", payload:response.data})
//       }
//     }, (error) => {
//       alert(error)
//     })
//   }
//   return (
//     <Modal dialogClassName="custom-modal" 
//       {...props}
//       show={props.show} 
//       onHide={props.handleClose} 
//       animation={false} 
//       className="Router-Modal">
//       <div className="router-header">
//         <button className="reset-button" onClick={resetAllRouters}>Reset All</button>
//           <div className="flex-center">
//             <img className="router-icon" src="./icons/Conexion.svg"/>
//             {/* <p>{localStorage.getItem("routers") ? localStorage.getItem("routers").length : 0} ROUTERS</p> */}

//             <p>{globalData.RouterIds ? globalData.RouterIds.length : 0 } ROUTERS</p>
//           </div>
//           <div onClick={props.handleClose}>X</div>
//       </div>
//       <div className="router-search">
//         <span>
//           <img src="./icons/Lupa.svg" className="box-icon" alt=""/>
//           <input type="text" className="search" placeholder="Buscar router" 
//             onChange={hanldeSearch}
//           />
//         </span>
//       </div>
//       <p className="routers-selected-num"></p>
//       <form className="router-form">
//         <>
//         <ul>
//           {globalData.searchedContent.length > 0 && globalData.searchedContent.length !== globalData.routers.length ? (
//             <>
//             {globalData.searchedContent.map((router, i) => (
//               <ul key={i}>
//                 <li key={i} className="router-group-item">
//                   <input type="checkbox" className="group" value={router.Hotspot ? router.Hotspot : false }
//                     checked={globalData.checkedBoxes.find((ch) => ch.Id === router.Id)}
//                     onChange={(e) => dispatch( {type: "CHECK_BOX", payload: [e.target.checked, router]})}
//                     />
//                     {router.Hotspot}
//                 </li>
//               </ul>
//               ))}
//             </>
//           ) : (
//             <>
//             {/* map over groupboxes */}
//             {globalData.loginData && globalData.loginData.routersInfo.map((item, index) => (
//               <li key={index} className="router-group router-group-item">
//                 <input type="checkbox" className="group" value={item.Nombre ? item.Nombre : false }
//                   checked={globalData.checkedGroupBoxes.find((ch) => ch.Id === item.Id)}
//                   onChange={(e) => dispatch( {type: "CHECK_ALL_GROUP_BOXES", payload: [e.target.checked, item]})}
//                 />
//                 {item.Nombre} 
//                 <img src="./icons/down-arrow.svg" alt="" className="box-icon expand-icon" onClick={() => dispatch({ type: "EXPAND_ROUTERS", payload:item.Id })}/>
//                   {/* map over routers inside each group */}
//                   {item.routers.map((router, i) => (
//                   <ul key={i} className={globalData.expandRouters && globalData.expandedRouterId == item.Id ? null : "hide"}>
//                     <li key={i} className="router-group-item">
//                       <input type="checkbox" className="group" value={router.Hotspot ? router.Hotspot : false }
//                         checked={globalData.checkedBoxes.find((ch) => ch.Id === router.Id)}
//                         onChange={(e) => dispatch( {type: "CHECK_BOX", payload: [e.target.checked, router]})}
//                         />
//                         {router.Hotspot}
//                     </li>
//                   </ul>
//                   ))}
//                 </li> 
//             ))}
//           </>
//           )}
//         </ul>
//         </>
//       <button className="aplicar-button" type="submit" onClick={handleFetchData}>APLICAR</button>
//     </form>
//   </Modal>
//   )
// }

// export default RouterModalOld