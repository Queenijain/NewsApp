import React, { useContext } from 'react'
import { FaMoon , FaSun } from "react-icons/fa";
import ThemeContext from '../Context/Theme/ThemeContext';

const ThemeButton = () => {
  const {theme , dispatch} = useContext(ThemeContext)

  const handleTheme = () =>{
    dispatch({
      type : "CHANGE_THEME"
    })
  }
  return (
    <button id= {theme ? 'themeBtnM' : 'themeBtnS' }onClick={handleTheme}>
        {theme ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeButton;