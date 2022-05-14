const KeyLabel = ({ label, indentation }) => {
  return <span>{ (new Array(indentation)).fill(' ') }{ label }</span>
}

export default KeyLabel