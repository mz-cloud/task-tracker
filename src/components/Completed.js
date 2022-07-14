import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Completed = () => {

  const [names, setNames] = useState([])

  useEffect(() => {
    const getNames = async () => {
      const namesFromServer = await fetchNames()
      setNames(namesFromServer)
    }
    getNames()
  }, [])

  const fetchNames = async () => {
    const res = await fetch('http://localhost:5001/names')
    const data = await res.json()
    return data
  }
  return (
    <div>
      {
        names && names.length > 0 && names.map((id) => <p>{id.text}</p> )
      }
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Completed
