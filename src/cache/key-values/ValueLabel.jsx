import { VALUE_TYPE } from '../../constants'
import styles from '../../styles.module.sass'
import getValueType from './getValueType'

const ValueLabel = ({ value }) => {
  const type = getValueType(value)

  return (
    <span className={`${styles.value} ${styles[type]}`}>
      {type === VALUE_TYPE.STRING && '"'}
      {value}
      {type === VALUE_TYPE.STRING && '"'}
    </span>
  )
}

export default ValueLabel