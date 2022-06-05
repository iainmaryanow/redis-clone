import { Fragment } from 'react'

import styles from '../styles.module.sass'
import ModifiableValue from './ModifiableValue'

const GroupValues = ({ group }) => {
  return (
    <div className={ styles.groupValuesContainer }>
      {
        group.map((valueDefinition, valueIndex) => {
          return (
            <Fragment key={ valueIndex }>
              <ModifiableValue valueDefinition={ valueDefinition } />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default GroupValues