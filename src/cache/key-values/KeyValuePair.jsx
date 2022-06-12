import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import styles from '../../styles.module.sass'

const KeyValuePair = ({ keyLabel, valueLabel }) => {
  return (
    <div key={keyLabel} className={styles.keyValuePairContainer}>
      <KeyLabel label={keyLabel} />
      :&nbsp;
      <ValueLabel value={valueLabel} />
    </div>
  )
}

export default KeyValuePair