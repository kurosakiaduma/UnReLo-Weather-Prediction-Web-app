import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";


class Weather extends React.Component {
    render()
    {
        return (
        <div style={{ border: '1px ', paddingLeft: '50px',paddingTop: '50px', display: 'inline-block' }}>
        <WiDaySunnyOvercast size={300} color='#87CEEB'/>
        </div>
        )
    }
}

export default Weather;