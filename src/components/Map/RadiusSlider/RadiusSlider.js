// CSS
import style from './RadiusSlider.module.css';

// LIBRARIES
import { useState } from 'react';


function RadiusSlider({debounceRadiusHandler, getRadiusHandler}) {
    const [radius, setRadius] = useState(1); // Set the raidus

    return (
        <div className={style.radiusInputContainer}>
            <input
                className={style.radiusInput}
                type="range"
                min={1}
                max={20}
                value={radius}
                name="radius"
                id="radius"
                onChange={(e) => {
                    setRadius(Number(e.target.value))
                    getRadiusHandler(Number(e.target.value))
                    debounceRadiusHandler(Number(e.target.value))
                }}
            />
            <span>{`${radius} km`}</span>
        </div>
    )
}

export default RadiusSlider
