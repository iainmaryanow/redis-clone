import { COMMAND_SCHEMAS } from '../constants'
import styles from '../styles.module.sass'
import GroupValues from './GroupValues'
import ModifiableValue from './ModifiableValue'

const CommandBuilder = ({ command }) => {
  const schema = COMMAND_SCHEMAS[command.name]

  return (
    <div className={ styles.commandBuilder }>
      <span>{ command.name }</span>
      {
        schema.requiredValues.map((valueDefinition, index) => {
          return (
            <span key={ index }>
              &nbsp;
              <ModifiableValue valueDefinition={ valueDefinition } />
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
    </div>
  )
}

export default CommandBuilder