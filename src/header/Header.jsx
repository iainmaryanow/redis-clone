import { Message } from 'semantic-ui-react'

import styles from '../styles.module.sass'

const Header = ({ error, message }) => {
  if (!error && !message) {
    return null
  }

  return (
    <Message
      error={!!error}
      success={!error}
      icon={error ? 'warning sign' : 'checkmark'}
      header={error || message}
      className={styles.header}
    />
  )
}

export default Header