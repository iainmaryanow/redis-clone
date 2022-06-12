import { useContext } from 'react'
import { Input } from 'semantic-ui-react'

import { CommandContext } from '../RedisClone'
import styles from '../styles.module.sass'

const INPUT_TYPE_MAPPING = {
  string: 'text',
  boolean: 'radio',
  integer: 'number'
}

const ModifiableValue = ({ valueDefinition, onChange }) => {
  const command = useContext(CommandContext)
  const { type, name, defaultValue } = valueDefinition

  return (
    <div className={`${styles[type]} ${styles.modifiableValue}`}>
      <span>{name}</span>

      <Input
        size='mini'
        value={command[name]}
        type={INPUT_TYPE_MAPPING[type]}
        placeholder={defaultValue}
        className={styles.valueInput}
        onChange={({ target }) => onChange({ [name]: target.value })}
      />
    </div>
  )
}

export default ModifiableValue