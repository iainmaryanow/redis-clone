import { useContext } from 'react'
import { Input } from 'semantic-ui-react'

import { CommandContext } from '../RedisClone'
import styles from '../styles.module.sass'
import { VALUE_TYPE_TO_INPUT_TYPE, VALUE_TYPE } from '../constants'

const ModifiableValue = ({ valueDefinition, onChange }) => {
  const command = useContext(CommandContext)
  const { type, name, defaultValue } = valueDefinition

  const getTargetValue = (target) => {
    switch (type) {
      case VALUE_TYPE.STRING:
        return target.value
      case VALUE_TYPE.BOOLEAN:
        return target.checked
      case VALUE_TYPE.NUMBER:
        return Number(target.value)
      default:
        throw new Error('Unknown value type')
    }
  }

  return (
    <div className={`${styles[type]} ${styles.modifiableValue}`}>
      <span>{name.toUpperCase()}</span>

      <Input
        size='mini'
        value={command[name]}
        type={VALUE_TYPE_TO_INPUT_TYPE[type]}
        placeholder={defaultValue}
        className={styles.valueInput}
        onChange={({ target }) => onChange({ [name]: getTargetValue(target) })}
      />
    </div>
  )
}

export default ModifiableValue