import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'

import RedisClone from './RedisClone'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RedisClone />
  </React.StrictMode>
)