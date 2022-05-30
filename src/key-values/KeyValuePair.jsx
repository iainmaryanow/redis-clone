import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'
import styles from '../styles.module.sass'

const KeyValuePair = ({ keyLabel, valueLabel, onClick }) => {
  return (
    <div key={ keyLabel } className={ styles.keyValuePairContainer }>
      <KeyLabel label={ keyLabel } />
      :&nbsp;
      <ValueLabel value={ valueLabel } onClick={ onClick } />
    </div>
  )
}

export default KeyValuePair