import { useContext } from 'react'
import { Input } from 'semantic-ui-react'
import { VALUE_TYPE } from '../constants'

import { CommandContext } from '../RedisClone'
import styles from '../styles.module.sass'

const INPUT_TYPE_MAPPING = {
  [VALUE_TYPE.STRING]: 'text',
  [VALUE_TYPE.BOOLEAN]: 'radio',
  [VALUE_TYPE.NUMBER]: 'number'
}

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
        type={INPUT_TYPE_MAPPING[type]}
        placeholder={defaultValue}
        className={styles.valueInput}
        onChange={({ target }) => onChange({ [name]: getTargetValue(target) })}
      />
    </div>
  )
}

export default ModifiableValue