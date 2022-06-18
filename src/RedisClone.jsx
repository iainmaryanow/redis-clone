import { useReducer, createContext, useState } from 'react'

import CommandBuilder from './command-builder/CommandBuilder'
import Cache from './cache/Cache'
import commandReducer, { INITIAL_COMMAND } from './reducers/commandReducer'
import sendCommand from './api/sendCommand'
import Header from './header/Header'
import { useEffect } from 'react'

export const CommandContext = createContext({})

const RedisClone = () => {
  const [command, dispatchCommand] = useReducer(commandReducer, INITIAL_COMMAND)
  const [cache, setCache] = useState({})
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const onChangeCommand = (updates) => { dispatchCommand({ ...command, ...updates }); console.log(updates) }
  const onNewCommand = (command, props) => dispatchCommand({ type: command, ...props })

  const createDisappearingHeader = (fn, content, timeout = 5000) => {
    fn(content)
    setTimeout(() => fn(''), timeout)
  }

  const onRunCommand = async () => {
    try {
      const { data } = await sendCommand(command)
      createDisappearingHeader(setMessage, `Result of ${command.type}: '${data.value}'`)
      setCache(data.cache)
      dispatchCommand(INITIAL_COMMAND)

    } catch ({ response, message }) {
      createDisappearingHeader(setError, response?.data ? response.data : message)
    }
  }

  useEffect(() => { onRunCommand() }, [])

  return (
    <>
      <Header error={error} message={message} />

      <CommandContext.Provider value={command}>
        <CommandBuilder onChangeCommand={onChangeCommand} onRunCommand={onRunCommand} />
      </CommandContext.Provider>

      <Cache cache={cache} onNewCommand={onNewCommand} />
    </>
  )
}

export default RedisClone