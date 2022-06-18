import { useReducer, createContext, useState } from 'react'

import CommandBuilder from './command-builder/CommandBuilder'
import Cache from './cache/Cache'
import cacheReducer, { INITIAL_CACHE } from './reducers/cacheReducer'
import commandReducer, { INITIAL_COMMAND } from './reducers/commandReducer'
import sendCommand from './api/sendCommand'
import Header from './header/Header'

export const CommandContext = createContext({})

const RedisClone = () => {
  const [cache, dispatchCache] = useReducer(cacheReducer, INITIAL_CACHE)
  const [command, dispatchCommand] = useReducer(commandReducer, INITIAL_COMMAND)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const onChangeCommand = (updates) => dispatchCommand({ ...command, ...updates })

  const createDisappearingHeader = (fn, content, timeout = 5000) => {
    fn(content)
    setTimeout(() => fn(''), timeout)
  }

  const onRunCommand = async () => {
    try {
      const { data } = await sendCommand(command)
      createDisappearingHeader(setMessage, `Result of ${command.type}: ${data.value}`)
      dispatchCache(command)
      dispatchCommand(INITIAL_COMMAND)

    } catch ({ response, message }) {
      createDisappearingHeader(setError, response?.data ? response.data : message)
    }
  }

  return (
    <>
      <Header error={error} message={message} />

      <CommandContext.Provider value={command}>
        <CommandBuilder onChangeCommand={onChangeCommand} onRunCommand={onRunCommand} />
      </CommandContext.Provider>

      <Cache cache={cache} onNewCommand={(command, props) => dispatchCommand({ type: command, ...props })} />
    </>
  )
}

export default RedisClone