import KeyLabel from './KeyLabel'
import ValueLabel from './ValueLabel'

const KeyValuePair = ({ keyLabel, valueLabel, onClick }) => {
  return (
    <div key={ keyLabel }>
      <KeyLabel label={ keyLabel } />
      :&nbsp;
      <ValueLabel value={ valueLabel } onClick={ onClick } />
    </div>
  )
}

export default KeyValuePair