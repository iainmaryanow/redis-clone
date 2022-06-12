import { Button } from 'semantic-ui-react'

import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import getCommandsForValue from './getCommandsForValue'
import styles from '../../styles.module.sass'

const COMMAND_TO_PHRASE = {
  'INCR': 'Increment',
  'SET': 'Update'
}

const KeyValuePair = ({ keyLabel, valueLabel, onCommandClick }) => {
  const commandsForValue = getCommandsForValue(valueLabel)

  return (
    <div className={styles.keyValuePairContainer}>
      <KeyLabel label={keyLabel} />
      :&nbsp;
      <ValueLabel value={valueLabel} />

      {
        commandsForValue.map((command) => {
          return (
            <Button compact size='small' key={command} onClick={() => onCommandClick(command, keyLabel, valueLabel)}>
              {COMMAND_TO_PHRASE[command]}
            </Button>
          )
        })
      }
    </div>
  )
}

export default KeyValuePair