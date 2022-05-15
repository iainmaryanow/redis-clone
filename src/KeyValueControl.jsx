import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import styles from './styles.module.sass'

const KeyValueControl = () => {
  return (
    <div className={ styles.keyValueControlContainer }>
      <span className={ styles.placeholder }>key: value</span>&nbsp;
      <Button size='small' type='primary' shape='round' icon={ <PlusOutlined /> } />
    </div>
  )
}

export default KeyValueControl