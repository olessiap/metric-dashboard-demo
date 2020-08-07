import httpClient from './httpClient'

const getMonitoreoData = async (search, routerIds, orderBy, orderByDescending, PageNumber, RowsPerPage) => {
  let checkedRouterIdsFromStorage = JSON.parse(localStorage.getItem("checkedRouterIds"))
  try {
    const response = await httpClient({
      url:"Monitoreo/Data",
      method: 'post',
      data: {
        "search": search, 
        "RouterIds": checkedRouterIdsFromStorage != null ? checkedRouterIdsFromStorage.join(",") : "", 
        "orderBy": "RouterId", 
        "orderByDescending": false,
        "PageNumber": 1,
        "RowsPerPage": ""
      },
    });
    return response.data 
  }  catch (e) {
    console.log(e)
  }
};

export default getMonitoreoData
