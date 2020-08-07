import axios from 'axios'
import { domain } from "../../components/App/App"

//fix this later
const httpClient = ({
  method = '',
  url = '',
  data = {},
  // timeout = 8000,
}) => {
  const headers = { 'Authorization': JSON.parse(localStorage.getItem("token"))}
  return axios({
    url:`${domain}${url}`,
    method,
    // timeout,
    headers,
    data,
  });
};

export default httpClient;