import axios from 'axios'

import { COMMAND_TO_METHOD } from '../constants'

const sendCommand = ({ type, ...values }) => {
  return axios.request({
    url: `http://localhost:8001/${type}`,
    method: COMMAND_TO_METHOD[type],
    params: values
  })
}

export default sendCommand