import { Button } from 'semantic-ui-react'

import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import getCommandsForValueType from './getCommandsForValueType'
import styles from '../../styles.module.sass'

const COMMAND_TO_PHRASE = {
  'INCR': 'Increment',
  'SET': 'Update'
}

const KeyValuePair = ({ keyLabel, value, onCommandClick }) => {
  const commandsForValue = getCommandsForValueType(value.type)

  return (
    <div className={styles.keyValuePairContainer}>
      <KeyLabel label={keyLabel} />
      :&nbsp;
      <ValueLabel value={value.value} type={value.type} />

      {
        commandsForValue.map((command) => {
          return (
            <Button compact size='small' key={command} onClick={() => onCommandClick(command, keyLabel, value.value)}>
              {COMMAND_TO_PHRASE[command]}
            </Button>
          )
        })
      }
    </div>
  )
}

export default KeyValuePair