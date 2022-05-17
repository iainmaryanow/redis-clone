import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import styles from '../styles.module.sass'
import getValueType from './getValueType'
import { VALUE_TYPE } from '../constants'

const ValueLabel = ({ value, onClick }) => {
  const type = getValueType(value)
  return (
    <>
      <span className={ `${ styles.value } ${ styles[type] }` }>
        { value }
      </span>

      {
        type === VALUE_TYPE.INTEGER &&
        <Button
          size='small'
          shape='round'
          icon={ <PlusOutlined /> }
          onClick={ onClick }
        >
          Increment
        </Button>
      }
    </>
  )
}

export default ValueLabel