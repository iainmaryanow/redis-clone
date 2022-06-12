import { Button } from 'semantic-ui-react'
import styles from '../../styles.module.sass'

const KeyValueControl = ({ onClick }) => {
  return (
    <div className={styles.keyValueControlContainer}>
      <span className={styles.placeholder}>key: value</span>
      <Button primary compact size='small' onClick={onClick}>Set key-value</Button>
    </div>
  )
}

export default KeyValueControl