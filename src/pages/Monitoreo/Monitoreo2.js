import React, { Component, useCallback, useContext, useEffect, useState } from 'react'
import Layout from '../../components/app-layout/Header/Layout'
import Footer from "../../components/app-layout/Footer/Footer"
import { useTable, useExpanded, useSortBy, usePagination } from 'react-table'
import styled from 'styled-components'
import monitoreoData from "./monitoreo-data"
import { DashboardContext } from "../../contexts/DashboardContext"
import { MonitoreoContext } from "./context/MonitoreoContext"
import Estado from "./Estado"
import UpTimes from "./UpTimes"

import getMonitoreoData from '../../services/API/getMonitoreoData'
import getMonitoreoStats from '../../services/API/getMonitoreoStats'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      padding: 30px 30px;
      text-align: left;
    }
    td {
      padding: 30px 30px;
      border-top: 1px solid #e4e4e4;
      }
    }

  .first-header:first-of-type {
    display:none;
  }
`
function Table({ columns: userColumns, data, renderRowSubComponent }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, //for pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: { pageIndex, pageSize, expanded }
  } = useTable(
    {
      columns: userColumns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    useExpanded,
    usePagination
    
  );
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const [ search, setSearch ] = useState("")

  
  React.useEffect(() => {
    getMonitoreoData(search).then(data => {
      let monitoreoData = data
      dispatchMonData( { type: 'FETCH_SUCCESS', payload:monitoreoData})
    })
    }, [search])

  //PAGINATION KILOMBOOOOOOOO

  let all = [...Array(pageOptions.length).keys()]
  let first3 = all.slice(0,3)
  let hidden = all.slice(4, -2)
  let last2 = all.slice(-2)
  
  
  function renderPagination(item) {
    switch(true){
      //first 6 pages
      case pageCount > 1 && pageCount < 7:
        return (
          <>
            {all.slice(0, pageCount).map((page, index) => {
              const button = (
                <button 
                  className={pageIndex == page ? "active" : null}
                  onClick={() => gotoPage(page)}>
                    {page+1}
                </button>
              )
              return button
            })}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => gotoPage(pageIndex + 1)} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>
              {'Última'}
            </button>{' '}
          </>
        )
      //more than 6 pages 
      case pageCount >= 7:
        return (
          <>
            {first3.map((page, index) => {
              const button = (
                <button 
                  className={pageIndex == page ? "active" : null}
                  onClick={() => gotoPage(page)}>
                    {page+1}
                </button>
              )
              return button
            })}
            <button>...</button>
            {last2.map((page, index) => {
              const button = (
                <button 
                  className={pageIndex == page ? "active" : null}
                  onClick={() => gotoPage(page)}>
                    {page+1}
                </button>
              )
              return button
            })}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => gotoPage(pageIndex + 1)} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>
              {'Última'}
            </button>{' '}
          </>
        )
      default:
        return null 
    }
  }
  const fetchSearchResults = e => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="table-top-header flex">
        <div className="table-sort">
          <div>
            <p>BUSCAR</p>
            <input 
              placeholder="Escribe tu búsqueda"
              onChange={ e => fetchSearchResults(e)}
            />
          </div>
        </div>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className="first-header"{...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                //add sorting props to header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* add sort direction indicator */}
                  <span> 
                    <img src="../../icons/sort-icon.png" alt="" style={{ height:'12px', marginLeft:'10px'}}/>
                    {/* {column.isSorted ? column.isSortedDesc ? ' D' : ' ^' : '' } */}
                  </span>
                  </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment {...row.getRowProps()}>
                <tr>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                        <UpTimes row={row} />
                      {renderRowSubComponent}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <br />
      <div className="pagination-wrapper">
        <div className="flex-space-between">
          <div className="pagination-text">Monstrando <b>{pageSize}</b> de <b>{data.length}</b> resultados</div>
          <div className="pagination">{renderPagination()}</div>
        </div>
      </div>
    </>
  );
}

function Monitoreo2() {
  const { monData, dispatchMonData } = useContext(MonitoreoContext)
  const { globalData, dispatch } = useContext(DashboardContext)
  
  React.useEffect(() => {
    let routerIds = JSON.parse(localStorage.getItem("checkedRouterIds")).join(",")
    let search = ""
    // const results = getMonitoreoData(search)
    getMonitoreoData().then(data => {
      let monitoreoData = data
      dispatchMonData( { type: 'FETCH_SUCCESS', payload:monitoreoData})
    })
    }, [])

  const showMonitoreoStats = row => {
    console.log(row)
  } 
  const columns = React.useMemo(
    () => [
       {
         Header: "Info",
         columns: [
           {
             Header: "HOTSPOT",
             accessor: "Hotspot"
           },
           {
             Header: "UBICACION",
             accessor: "Ubicacion"
           },
           {
             Header: "SECTOR",
             accessor: "Sector"
           },
           {
            Header: "MODO",
            accessor: "Modo"
          },
          {
            Header: "ULTIMO CONTACTO",
            accessor: "UltimoContacto"
          },
          // {
          //   Header: "USARIOS",
          //   accessor: "UsariosActivos"
          // },
          {
            Header: "ESTADO",
            accessor: "Estado",
            // Cell: props => <Estado id={props} />
          },
         ]
       },
       {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps(
          //   {
          //   onClick: () => {
          //     getMonitoreoStats(row.id).then(data => {
          //       console.log(data)
          //     // let monitoreoData = data
          //     // dispatchMonData( { type: 'FETCH_SUCCESS', payload:monitoreoData})
          //     })
          //     row.toggleRowExpanded(<UpTimes row={row} />);
          //   }
          // }
          )}
          >
            {row.isExpanded ? <img src="../../icons/up-arrow.svg"/> : <img src="../../icons/down-arrow.svg"/>}
          </span>
        )
      },
     ],
     []
   )
  let routerData = monData.data ? monData.data.RoutersList : "nada"
  const data = React.useMemo(() => routerData !== undefined ? routerData : monitoreoData.data) 
  // const renderRowSubComponent = React.useCallback(
  //   <UpTimes />
  // );

  return (
    <Styles>
      <>
        <Layout hideExport={true} hideCalendar={true}/>
          <div className="monitoreo-wrapper">
            <div className="monitoreo-table-wrapper">
              <Table
                columns={columns}
                data={data}
                // renderRowSubComponent={renderRowSubComponent}
                className="monitoreo-table"
              />
            </div>
            <Footer />
          </div>
      </>
    </Styles>
  )
}

export default Monitoreo2