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
           <h1 style={{fontSize: '4rem', color:'#87CEEB',  fontWeight: 'bold', paddingLeft: '50px'}}> 28&deg;C </h1>

           <h3 style={{fontSize: '2rem', fontWeight:'normal', paddingLeft: '50px'}}> Temperature</h3>
         </div>
        </div>
        )
    }
}

export default Weather;