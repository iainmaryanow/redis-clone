import { COMMAND } from '../constants'
import KeyValueControl from './key-values/KeyValueControl'
import KeyValuePair from './key-values/KeyValuePair'
import styles from '../styles.module.sass'

const Cache = ({ cache, onNewCommand }) => {
  const onClick = (command, key, value) => onNewCommand(command, { key, value })

  return (
    <pre>
      <span>{'{'}</span>

      <div className={styles.keyValueContainer}>
        {
          Object.entries(cache).map(([key, value]) => {
            return <KeyValuePair key={key} keyLabel={key} value={value} onCommandClick={onClick} />
          })
        }

        <KeyValueControl onClick={() => onNewCommand(COMMAND.SET)} />
      </div>

      <span>{'}'}</span>
    </pre>
  )
}

export default Cache