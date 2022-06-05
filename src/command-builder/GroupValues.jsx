import { Fragment } from 'react'

import styles from '../styles.module.sass'
import ModifiableValue from './ModifiableValue'

const GroupValues = ({ group }) => {
  return (
    <div className={ styles.groupValuesContainer }>
      {
        group.map((valueDefinition, valueIndex) => {
          const isFirst = valueIndex === 0
          const isLast = valueIndex === group.length - 1

          return (
            <Fragment key={ valueIndex }>
              <ModifiableValue valueDefinition={ valueDefinition } isFirst={ isFirst } isLast={ isLast } />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default GroupValues