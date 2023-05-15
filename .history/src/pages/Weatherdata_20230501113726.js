import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";


class Weather extends React.Component {
    render()
    {
        return (
        <div style={{ border: '1px solid black', padding: '10px', display: 'inline-block' }}>
        <WiDaySunnyOvercast size={300} color='#87CEEB'/>
        </div>
        )
    }
}

export default Weather;