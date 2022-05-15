import { Tag, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import styles from './styles.module.sass'
import { getValueType } from './helpers'

const ValueLabel = ({ value }) => {
  const type = getValueType(value)
  return (
    <>
      <span className={ `${ styles.value } ${ styles[type] }` }>
        { value }
      </span>
      <Tag>{ type }</Tag>
      {
        type === 'integer' &&
        <Button size='small' shape='round' icon={ <PlusOutlined /> }>Increment</Button>
      }
    </>
  )
}

export default ValueLabel