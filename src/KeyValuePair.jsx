import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'

const KeyValuePair = ({ keyLabel, valueLabel }) => {
  return (
    <div key={ keyLabel }>
      <KeyLabel label={ keyLabel } />
      :&nbsp;
      <ValueLabel value={ valueLabel } />
    </div>
  )
}

export default KeyValuePair