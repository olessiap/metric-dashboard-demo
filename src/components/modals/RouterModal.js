import React, { useContext, useState, useEffect } from 'react'
import Axios from 'axios'
import { DashboardContext } from '../../contexts/DashboardContext'
import { MonitoreoContext } from '../../pages/Monitoreo/context/MonitoreoContext'
import { domain } from "../App/App"
import Modal from 'react-bootstrap/Modal';
import fontawesome from '@fortawesome/fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSquare, faCircle, faCoffee, faChevronRight, faChevronDown, faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import CheckboxTree from 'react-checkbox-tree'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getMonitoreoData from '../../services/API/getMonitoreoData'

fontawesome.library.add(faSquare, faCircle, faChevronRight, faChevronDown, faCheckSquare, faPlusSquare, faMinusSquare, faCoffee, )


//save current checked state in LS on applicar. on re-load read from local state
const RouterModal = props => {
  const { globalData, dispatch } = useContext(DashboardContext)
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const [ checked, setChecked ] = React.useState(globalData.defaultChecked != null ? globalData.defaultChecked : JSON.parse(localStorage.getItem("checkedRouters")))
  const [ expanded, setExpanded ] = React.useState([])
  const [ filterText, setFilterText ] = React.useState('')
  const [ nodesFiltered, setNodesFiltered ] = React.useState(globalData.routerNodes)
  const [ nodes, setNodeds ] = React.useState(globalData.routerNodes)
  
  //each time RouterModal component opens, create checkboxes
  useEffect(() => {
    if(globalData.loginData) {
      dispatch({ type: 'CREATE_ROUTER_NODES', payload:globalData.loginData})
    }
  }, [])

  //update checkedRouters and checkedrouterIds in local storage everytime checked state changes
  useEffect(() => {
    let routerIds = checked.map((item) => {
      return Number(item.split("/")[1])
    })
    localStorage.setItem('checkedRouters', JSON.stringify(checked))
    localStorage.setItem('checkedRouterIds', JSON.stringify(routerIds))

  }, [checked])
  
  const resetAllRouters = () => {
    setChecked([])
  }

  ///FILTER LOGIC /////
  const onFilterChange = (e) => {
    setFilterText(e.target.value)
    if(e.target.value) {
      filterTree()
    }
  }

  const filterTree = () => {
      // Reset nodes back to unfiltered state
      if (!filterText || filterText == "" || filterText.length === 0) {
        setNodesFiltered(globalData.routerNodes)
          return;
      }

      const nodesFiltered = nodes => {
        return nodes.reduce(filterNodes, [])  
      };

      setNodesFiltered(nodesFiltered);

  }

  const filterNodes = (filtered, node) => {
      const children = (node.children || []).reduce(filterNodes, []);
      if (
          // Node's label matches the search string
          node.label.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
          // Or a children has a matching node
          children.length
      ) {
          filtered.push({ ...node, children });
      }
      return filtered;
  }


  ///API CALL/////
  const handleFetchData = (e) => {
    e.preventDefault()
    let routerIds = JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
    if(window.location.hash === '#/dashboard') {
      props.handleClose()
      dispatch({ type: "TOGGLE_MODAL" })
      
      Axios.post(domain + 'Dashboard/Data', {
        "UserId": globalData.loginData.userId,
        "FromDate":globalData.dateRange[0].startDate.toISOString(), 
        "ToDate":globalData.dateRange[0].endDate.toISOString(),  
        "RouterIds":routerIds
      },
      {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
      })
      .then((response) => {
        dispatch({ type:'FETCH_SUCCESS_DASHBOARD', payload:response.data })
        props.handleClose()
      }, (error) => {
        dispatch({ type:'FETCH_ERROR_DASHBOARD', })
        alert(error)
      })

      //make new map markers call
      Axios.post(domain + 'Dashboard/RealTimeMap', {
        "RouterIds":JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
      },
      {headers: { Authorization: `Bearer ${globalData.loginData.token}` }
      })
      .then((response) => {
        if(!globalData.cancelRequest) {
          dispatch({ type:"FETCH_SUCCESS_MARKER_DATA", payload:response.data})
        }
      }, (error) => {
        alert(error)
      })
    }
    if(window.location.hash === '#/demografico') {
      props.handleClose()
      dispatch({ type: "TOGGLE_MODAL" })
      // fetch demographico data
    }
    if(window.location.hash === '#/monitoreo') {
      props.handleClose()
      dispatch({ type: "TOGGLE_MODAL" })
      getMonitoreoData().then(data => {
        let monitoreoData = data
        dispatchMonData({ type: 'FETCH_SUCCESS', payload:monitoreoData })
      })
    }
  }
  return (
    <Modal dialogClassName="custom-modal" 
      {...props}
      show={props.show} 
      onHide={props.handleClose} 
      animation={false} 
      className="Router-Modal">
      <div className="router-header">
        <button className="reset-button" onClick={resetAllRouters}>Reset All</button>
          <div className="flex-center">
            <img className="router-icon" src="./icons/Conexion.svg"/>
            <p>{checked != [] ? checked.length : 0} HOTSPOTS</p>
          </div>
          <div onClick={props.handleClose}>X</div>
      </div>
      <div className="router-search">
        <span>
          <img src="./icons/Lupa.svg" className="box-icon" alt=""/>
          <input 
            type="text" 
            className="search" 
            placeholder="Buscar router" 
            onChange={onFilterChange}
          />
        </span>
      </div>
      <p className="routers-selected-num"></p>
      <form className="router-form">
      <CheckboxTree
        nodes={filterText.length !== 0 ? nodesFiltered : globalData.routerNodes}
        checked={checked}
        expanded={expanded}
        onCheck={checked => setChecked(checked)}
        onExpand={expanded => setExpanded(expanded)}
        showCheckbox={true}
        icons={{
          check: <span className="rct-icon rct-icon-check" />,
          uncheck: <span className="rct-icon rct-icon-uncheck" />,
          halfCheck: <span className="rct-icon rct-icon-half-check" />,
          expandClose: <span className="rct-icon rct-icon-expand-close" />,
          expandOpen: <span className="rct-icon rct-icon-expand-open" />,
          expandAll: <span className="rct-icon rct-icon-expand-all" />,
          collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
          parentClose: <span className="rct-icon rct-icon-parent-close" />,
          parentOpen: <span className="rct-icon rct-icon-parent-open" />,
          leaf: <span className="rct-icon rct-icon-leaf" />,
      }}
      />
      <button className="aplicar-button" type="submit" onClick={handleFetchData}>APLICAR</button>
    </form>
  </Modal>
  )
}

export default RouterModal