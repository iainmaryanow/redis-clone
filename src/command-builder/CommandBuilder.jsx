import { useState } from 'react'

import { Button } from 'semantic-ui-react'
import { COMMAND_SCHEMAS } from '../constants'
import styles from '../styles.module.sass'
import GroupValues from './GroupValues'
import ModifiableValue from './ModifiableValue'

const CommandBuilder = ({ command }) => {
  const [loading, setLoading] = useState(false)

  const runCommand = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2500)
  }

  const schema = COMMAND_SCHEMAS[command?.type]
  if (!schema) {
    return null
  }

  return (
    <div className={ styles.commandBuilder }>
      <span>{ command.type }</span>

      {
        schema.requiredValues.map((valueDefinition, index) => {
          return (
            <span key={ index }>
              &nbsp;
              <ModifiableValue valueDefinition={ valueDefinition } defaultValue={ command[valueDefinition.name] } />
            </span>
          )
        })
      }

      {
        schema.optionalGroups.map((optionalGroup, index) => {
          return (
            <span key={ index }>
              &nbsp;
              <GroupValues group={ optionalGroup } />
            </span>
          )
        })
      }

      <Button
        positive
        size='large'
        icon='checkmark'
        loading={ loading }
        className={ styles.runCommand }
        onClick={ runCommand }
      />
    </div>
  )
}

export default CommandBuilder