import { useState, useContext } from 'react'
import { Button } from 'semantic-ui-react'

import { COMMAND_SCHEMA } from '../constants'
import { CommandContext } from '../RedisClone'
import styles from '../styles.module.sass'
import GroupValues from './GroupValues'
import ModifiableValue from './ModifiableValue'

const CommandBuilder = ({ onChangeCommand, onRunCommand }) => {
  const [isLoading, setIsLoading] = useState(false)
  const command = useContext(CommandContext)

  const runCommand = async () => {
    setIsLoading(true)
    await onRunCommand()
    setIsLoading(false)
  }

  const schema = COMMAND_SCHEMA[command?.type]
  if (!schema) {
    return null
  }

  const isRunCommandDisabled = () => schema.requiredValues.some(({ name }) => !command[name])

  return (
    <div className={styles.commandBuilder}>
      <span className={styles.commandName}>{command.type}</span>

      {
        schema.requiredValues.map((valueDefinition, index) => {
          return <ModifiableValue key={index} valueDefinition={valueDefinition} onChange={onChangeCommand} />
        })
      }

      {
        schema.optionalGroups.map((optionalGroup, index) => {
          return <GroupValues key={index} group={optionalGroup} onChange={onChangeCommand} />
        })
      }

      <Button
        positive
        size='large'
        icon='checkmark'
        loading={isLoading}
        className={styles.runCommand}
        onClick={runCommand}
        disabled={isRunCommandDisabled()}
      />
    </div>
  )
}

export default CommandBuilder