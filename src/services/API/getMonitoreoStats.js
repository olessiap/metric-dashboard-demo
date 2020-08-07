import httpClient from './httpClient'

const getMonitoreoStats = async (routerId) => {
  try {
    const response = await httpClient({
      url:`Monitoreo/Stats?routerId=${routerId}`,
      method: "get",
    })
    return response
  } catch(e) {
    console.log(e)
  }
}

export default getMonitoreoStats