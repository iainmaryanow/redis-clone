import { useState } from 'react'

import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'

const RedisClone = () => {
  const [cache, setCache] = useState({
    'ab': 'def',
    'ef': 100
  })

  return (
    <pre>
      {
        Object.entries(cache).map(([key, value]) => {
          return (
            <>
              <KeyLabel label={ key } indentation={ 0 } />
              :&nbsp;
              <ValueLabel value={ value } />
              <br />
            </>
          )
        })
      }
    </pre>
  )
}

export default RedisClone