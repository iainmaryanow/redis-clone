import { useEffect, useState } from 'react'
import { Label } from 'semantic-ui-react'

const Countdown = ({ startingValue }) => {
  const [currentValue, setCurrentValue] = useState(startingValue)

  useEffect(() => {
    const id = setInterval(() => setCurrentValue(currentValue => currentValue - 1), 1000)
    return () => clearInterval(id)
  }, [])

  let text = `Expires in ${currentValue}s`
  let color = 'yellow'
  if (currentValue <= 0) {
    text = 'Expired'
    color = 'red'
  }

  return <Label size='tiny' color={color}>{text}</Label>
}

export default Countdown