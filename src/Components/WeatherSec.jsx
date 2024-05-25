import React, { useContext } from 'react'
import ThemeContext from '../Context/Theme/ThemeContext'

const WeatherSec = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={theme ? "card p-4 w-50 shadow-sm" : "card p-4 w-50 bg-dark shadow-sm"}>
                <div className="d-flex align-items-center justify-content-around">
                    <span>
                        <h1 className={theme ? "text-dark" : "text-light"}>26°</h1>
                        <h2 className={theme ? "text-dark" : "text-light"}>INDORE</h2>
                    </span>
                    <span>
                        <img style={{ height: "50px" }} src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="" />
                        <p className='my-3 text-secondary'>SUNNY</p>
                    </span>

                </div>
            </div>
        </div>




    )
}

export default WeatherSec