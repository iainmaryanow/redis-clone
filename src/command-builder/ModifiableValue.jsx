import { useState } from 'react'
import { Input } from 'semantic-ui-react'

import styles from '../styles.module.sass'

const INPUT_TYPE_MAPPING = {
  string: 'text',
  boolean: 'checkbox',
  integer: 'number'
}

const ModifiableValue = ({ valueDefinition, defaultValue }) => {
  return (
    <div className={ `${ styles[valueDefinition.type] } ${ styles.modifiableValue }` }>
      <span>{ valueDefinition.name }</span>

      <Input
        transparent
        size='mini'
        type={ INPUT_TYPE_MAPPING[valueDefinition.type] }
        placeholder={ valueDefinition.default ?? '...' }
        className={ styles.valueInput }
      />
    </div>
  )
}

export default ModifiableValue