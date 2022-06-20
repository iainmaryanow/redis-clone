import { createContext, useState, useEffect } from 'react'

import CommandBuilder from './command-builder/CommandBuilder'
import Cache from './cache/Cache'
import sendCommand from './api/sendCommand'
import Header from './header/Header'
import { COMMAND } from './constants'

const INITIAL_COMMAND = { type: COMMAND.PING }

export const CommandContext = createContext({})

const RedisClone = () => {
  const [command, setCommand] = useState(INITIAL_COMMAND)
  const [cache, setCache] = useState({})
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const onChangeCommand = (updates) => setCommand({ ...command, ...updates })
  const onNewCommand = (command, props) => setCommand({ type: command, ...props })

  const createDisappearingHeader = (fn, content, timeout = 5000) => {
    fn(content)
    setTimeout(() => fn(''), timeout)
  }

  const onRunCommand = async () => {
    try {
      const { data } = await sendCommand(command)
      createDisappearingHeader(setMessage, `Result of ${command.type}: '${data.value}'`)
      setCache(data.cache)
      setCommand(INITIAL_COMMAND)

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