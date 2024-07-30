import { FaCheck } from 'react-icons/fa'
import "./Checkbox.css"
import { useState } from 'react'

const Checkbox = () => {
    const [isChecked , setIsChecked] = useState(false)
  return (
    <div className={`my-checbox ${isChecked ? "checked" : ''}`}
    onClick={ () => setIsChecked( prev => !prev ) }
    >
        {isChecked && <FaCheck />}
    </div>
  )
}

export default Checkbox