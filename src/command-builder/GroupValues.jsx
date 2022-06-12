import styles from '../styles.module.sass'
import ModifiableValue from './ModifiableValue'

const GroupValues = ({ group, onChange }) => {
  return (
    <div className={styles.groupValuesContainer}>
      {
        group.map((valueDefinition, index) => {
          return <ModifiableValue key={index} valueDefinition={valueDefinition} onChange={onChange} />
        })
      }
    </div>
  )
}

export default GroupValues