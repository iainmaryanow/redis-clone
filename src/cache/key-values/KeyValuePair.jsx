import { Button } from 'semantic-ui-react'

import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import styles from '../../styles.module.sass'
import Countdown from './Countdown'
import { VALUE_TYPE_TO_COMMANDS, COMMAND_TO_PHRASE } from '../../constants'

const KeyValuePair = ({ keyLabel, value, onCommandClick }) => {
  const commandsForValue = VALUE_TYPE_TO_COMMANDS[value.type] ?? []

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

      {
        value.timeoutRemainingSeconds && <Countdown startingValue={value.timeoutRemainingSeconds} />
      }
    </div>
  )
}

export default KeyValuePair