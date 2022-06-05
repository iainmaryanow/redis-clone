import { useState } from 'react'
import { Input } from 'semantic-ui-react'

import styles from '../styles.module.sass'

const INPUT_TYPE_MAPPING = {
  string: 'text',
  boolean: 'radio',
  integer: 'number'
}

const ModifiableValue = ({ valueDefinition, defaultValue, isFirst, isLast }) => {
  return (
    <div className={ `${ styles[valueDefinition.type] } ${ styles.modifiableValue }` }>
      <span>{ valueDefinition.name }</span>

      <Input
        size='mini'
        value={ defaultValue ?? undefined }
        type={ INPUT_TYPE_MAPPING[valueDefinition.type] }
        placeholder={ valueDefinition.default ?? '...' }
        className={ styles.valueInput }
      />
    </div>
  )
}

export default ModifiableValue