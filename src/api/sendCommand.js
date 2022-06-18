import axios from 'axios'
import { COMMAND } from '../constants'

const COMMAND_TO_ROUTE_METHOD = {
  [COMMAND.PING]: 'get',
  [COMMAND.INCR]: 'put',
  [COMMAND.SET]: 'put'
}

const sendCommand = ({ type, ...values }) => {
  return axios.request({
    url: `http://localhost:8001/${type}`,
    method: COMMAND_TO_ROUTE_METHOD[type],
    params: values
  })
}

export default sendCommand