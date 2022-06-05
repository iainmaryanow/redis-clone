import { useReducer, useState } from 'react'

import styles from './styles.module.sass'
import CommandBuilder from './command-builder/CommandBuilder'
import KeyValuePair from './key-values/KeyValuePair'
import KeyValueControl from './key-values/KeyValueControl'
import cacheReducer from './reducers/cacheReducer'

const RedisClone = () => {
  const [cache, dispatchCache] = useReducer(cacheReducer, { first: 'hello', another: 321 })
  const [command, setCommand] = useState(null)

  return (
    <>
      <CommandBuilder command={ command } />

      <pre>
        <span>{ '{' }</span>

        <div className={ styles.keyValueContainer }>
          {
            Object.entries(cache).map(
              ([key, value]) => {
                return (
                  <KeyValuePair
                    key={ key }
                    keyLabel={ key }
                    valueLabel={ value }
                    onClick={ () => setCommand({ type: 'INCR', key }) }
                  />
                )
              }
            )
          }

          <KeyValueControl onClick={ () => setCommand({ type: 'SET', key: 'key', value: 'value' }) }/>
        </div>

        <span>{ '}' }</span>
      </pre>
    </>
  )
}

export default RedisClone