import axios from 'axios'

const COMMAND_TO_ROUTE_METHOD = {
  'INCR': 'put',
  'SET': 'put'
}

const sendCommand = ({ type, ...values }) => {
  return axios.request({
    url: `http://localhost:8001/${type}`,
    method: COMMAND_TO_ROUTE_METHOD[type],
    params: values
  })
}

export default sendCommand