import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";

// Weather Icon
class Weather extends React.Component {
    render()
    {
        return (
            <body class = 'bg-sky-600'>
        <div style={{ border: '1px ', paddingLeft: '50px',paddingTop: '50px', display: 'inline-block' }}>
        <WiDaySunnyOvercast size={300} color='#87CEEB'/>
         <div>
           <h1 style={{fontSize: '4rem', color:'white',  fontWeight: 'bold', paddingLeft: '50px'}}> 28&deg;C </h1>

           <h3 style={{fontSize: '1.8rem', color:'white', fontWeight:'normal', paddingLeft: '40px'}}> Temperature</h3>

           <h4 style={{fontSize: '1.4rem', fontWeight:'lighter',  }}></h4>
         </div>
        </div>
        </body>
        )
    }
}

export default Weather;