import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import styles from '../styles.module.sass'

const KeyValueControl = ({ onClick }) => {
  return (
    <div className={ styles.keyValueControlContainer }>
      <span className={ styles.placeholder }>key: value</span>&nbsp;
      <Button
        size='small'
        type='primary'
        shape='round'
        icon={ <PlusOutlined /> }
        onClick={ onClick }
      >
        Set key-value
      </Button>
    </div>
  )
}

export default KeyValueControl