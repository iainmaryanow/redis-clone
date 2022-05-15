import { useState } from 'react'

import styles from './styles.module.sass'
import Controls from './Controls'
import KeyValuePair from './KeyValuePair'

const RedisClone = () => {
  const [cache, setCache] = useState({})

  return (
    <pre>
      <Controls />

      <div>{ '{' }</div>
      <div className={ styles.keyValueContainer }>
        {
          Object.entries(cache).map(
            ([key, value]) => <KeyValuePair keyLabel={ key } valueLabel={ value } key={ key } />
          )
        }
      </div>
      <div>{ '}' }</div>
    </pre>
  )
}

export default RedisClone