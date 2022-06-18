import { VALUE_TYPE } from '../../constants'
import styles from '../../styles.module.sass'

const ValueLabel = ({ value, type }) => {
  return (
    <span className={`${styles.value} ${styles[type]}`}>
      {type === VALUE_TYPE.STRING && '"'}
      {value}
      {type === VALUE_TYPE.STRING && '"'}
    </span>
  )
}

export default ValueLabel