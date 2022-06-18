import { useEffect, useState } from 'react'

const Countdown = ({ startingValue }) => {
  const [currentValue, setCurrentValue] = useState(startingValue)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentValue(currentValue => currentValue - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return <span>Expires in {currentValue}s</span>
}

export default Countdown