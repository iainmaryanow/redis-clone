import { Button } from 'semantic-ui-react'

import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import getCommandsForValueType from './getCommandsForValueType'
import styles from '../../styles.module.sass'
import Countdown from './Countdown'
import { COMMAND } from '../../constants'

const COMMAND_TO_PHRASE = {
  [COMMAND.INCR]: 'Increment',
  [COMMAND.SET]: 'Update'
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

      {
        value.timeoutRemainingSeconds && <Countdown startingValue={value.timeoutRemainingSeconds} />
      }
    </div>
  )
}

export default KeyValuePair