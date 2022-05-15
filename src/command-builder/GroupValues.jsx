import ModifiableValue from './ModifiableValue'

const GroupValues = ({ group }) => {
  return (
    <>
      [
      {
        group.map((valueDefinition, valueIndex) => {
          return (
            <span key={ valueIndex }>
              { valueIndex > 0 && <span> | </span> }
              <ModifiableValue valueDefinition={ valueDefinition } />
            </span>
          )
        })
      }
      ]
    </>
  )
}

export default GroupValues