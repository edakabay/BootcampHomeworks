import React, { useState } from 'react'

function StateDiv() {
    

    const [width, setwidth] = useState('100')
    const [height, setheight] = useState('100')

    const divStyle = {
        width: `${width}px`,
        height: `${height}px`,
        border: '1px solid black' // Burada bir border ekliyoruz.
    };


    const handleWidthChange = (e) => {
        setwidth(parseInt(e.target.value,10))
    }

    const handleHeightChange = (e) => {
        setheight(parseInt(e.target.value,10))
    }

    return (<>

        <div>
            <label htmlFor="width">Width</label>
            <input type="text" id="width" value={width} onChange={handleWidthChange} />
        </div>
        <div>
            <label htmlFor="height">Height</label>
            <input type="text" id="height" value={height} onChange={handleHeightChange} />
        </div>


       
        <div style={{ width, height}}></div>
        <div style={divStyle}></div>

    </>)
}

export default StateDiv