import { useState } from 'react'

import styles from './styles.module.sass'
import CommandBuilder from './command-builder/CommandBuilder'
import KeyValuePair from './KeyValuePair'
import KeyValueControl from './KeyValueControl'

const RedisClone = () => {
  const [cache, setCache] = useState({ abc: 'def', ghi: 100 })
  const [command, setCommand] = useState({ name: 'SET' })

  return (
    <>
      <CommandBuilder command={ command } />
      <pre>
        <div>{ '{' }</div>
        <div className={ styles.keyValueContainer }>
          {
            Object.entries(cache).map(
              ([key, value]) => <KeyValuePair keyLabel={ key } valueLabel={ value } key={ key } />
            )
          }
          <KeyValueControl />
        </div>
        <div>{ '}' }</div>
      </pre>
    </>
  )
}

export default RedisClone