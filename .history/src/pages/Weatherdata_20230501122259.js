import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";

// Weather Icon
class Weather extends React.Component {
    render()
    {
        return (
    <body class = 'bg-sky-600'>
        <div style={{ border: '1px ', paddingLeft: '100px',paddingTop: '70px', display: 'inline-block' }}>
        <WiDaySunnyOvercast size={300} color='#87CEEB'/>
          <div>
           <h1 style={{fontSize: '4rem', color:'white',  fontWeight: 'bold', paddingLeft: '70px'}}> 28&deg;C </h1>

           <h3 style={{fontSize: '1.8rem', color:'white', fontWeight:'normal', paddingLeft: '55px'}}> Temperature</h3>

           <h4 style={{fontSize: '1.4rem', fontWeight:'lighter', color:'white', paddingLeft: '40px'}}> Max: 28&deg;C Min: 20&deg;C </h4>
          </div>
        </div>
    </body>
        )
    }
}

export default Weather;