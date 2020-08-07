import React, {useEffect, useContext} from 'react'
import Axios from "axios";
import { domain } from '../../components/App/App'
import { DashboardContext } from '../../contexts/DashboardContext';
import { useHistory } from "react-router-dom";

const CancelRequest = () => {
  const { globalData, dispatch } = useContext(DashboardContext)
  const history = useHistory();

  const url = `${domain}/Dashboard/Data`
  useEffect(() => {
    let source = Axios.CancelToken.source();

    const loadData = async () => {
      try {
        const response = await Axios.post(url, {
          cancelToken: source.token
        });
        console.log("AxiosCancel: got response");
        console.log(response.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("AxiosCancel: caught cancel")
        } else {
          throw error;
        }
      }
    }
    loadData()

    return () => {
      console.log("AxiosCancel: unmounting")
      source.cancel()
      dispatch({type:"CANCEL_LOGIN"})
      history.push("/")
    };
  }, [url]);

  return (
    <div></div>
  )
}

export default CancelRequest
