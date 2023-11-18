import {useState} from 'react';

export default function Transformation() {
  const [transformation, setTransformation] = useState('Kaioken')
  const [clickCount, setClickCount] = useState(1)

  const toggleTransformation = () => {
    setClickCount(clickCount + 1)

    if (clickCount === 4) {
      setTransformation((prev) =>
        prev === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
      )
    } else if (transformation === 'SuperSaiyan') {
      setTransformation('Kaioken')
      setClickCount(1)
    }
  }

  return (
    <div>
      <h1>Transformation App</h1>
      <p>Current Transformation: {transformation}</p>
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  )
}