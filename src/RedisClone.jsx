import { useReducer, createContext } from 'react'

import styles from './styles.module.sass'
import CommandBuilder from './command-builder/CommandBuilder'
import KeyValuePair from './key-values/KeyValuePair'
import KeyValueControl from './key-values/KeyValueControl'
import cacheReducer from './reducers/cacheReducer'
import commandReducer from './reducers/commandReducer'
import { COMMAND } from './constants'

export const CommandContext = createContext({})

const RedisClone = () => {
  const [cache, dispatchCache] = useReducer(cacheReducer, { first: 'hello', another: 321 })
  const [command, dispatchCommand] = useReducer(commandReducer, {})

  const onChangeCommand = (updates) => {
    dispatchCommand({ type: command.type, ...updates })
  }

  const onRunCommand = () => {
    // Call API
    // Success - dispatchCache
    // Failure - show error
    dispatchCache(command)
  }

  return (
    <>
      <CommandContext.Provider value={command}>
        <CommandBuilder onChangeCommand={onChangeCommand} onRunCommand={onRunCommand} />
      </CommandContext.Provider>

      <pre>
        <span>{'{'}</span>

        <div className={styles.keyValueContainer}>
          {
            Object.entries(cache).map(
              ([key, value]) => {
                return (
                  <KeyValuePair
                    key={key}
                    keyLabel={key}
                    valueLabel={value}
                    onClick={() => dispatchCommand({ type: COMMAND.INCR, key })}
                  />
                )
              }
            )
          }

          <KeyValueControl onClick={() => dispatchCommand({ type: COMMAND.SET, key: 'key', value: 'value' })} />
        </div>

        <span>{'}'}</span>
      </pre>
    </>
  )
}

export default RedisClone