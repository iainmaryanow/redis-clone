import styles from '../styles.module.sass'

const ModifiableValue = ({ valueDefinition, defaultValue }) => {
  return <span className={ styles[valueDefinition.type] }>
    { defaultValue ?? valueDefinition.name }
  </span>
}

export default ModifiableValue