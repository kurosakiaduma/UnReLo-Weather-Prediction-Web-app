import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";

// Weather Icon
class Weather extends React.Component {
    render()
    {
        return (
        <div style={{ border: '1px ', paddingLeft: '50px',paddingTop: '50px', display: 'inline-block' }}>
        <WiDaySunnyOvercast size={300} color='#87CEEB'/>
         <div>
           <h1 style={{fontSize: '4rem', fontWeight: 'bold'}}> 28&deg;C </h1>
            
         </div>
        </div>
        )
    }
}

export default Weather;