import styles from '../styles.module.sass'

const ModifiableValue = ({ valueDefinition }) => {
  return <span className={ styles[valueDefinition.type] }>
    { valueDefinition.name }
  </span>
}

export default ModifiableValue