import { Button } from 'semantic-ui-react'

import styles from '../styles.module.sass'
import getValueType from './getValueType'
import { VALUE_TYPE } from '../constants'

const ValueLabel = ({ value, onClick }) => {
  const type = getValueType(value)
  return (
    <>
      <span className={`${styles.value} ${styles[type]}`}>
        {value}
      </span>

      {
        type === VALUE_TYPE.INTEGER &&
        <Button compact size='mini' onClick={onClick}>
          Increment
        </Button>
      }
    </>
  )
}

export default ValueLabel