import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Brush } from 'recharts';



function formatted(totalseconds){
    const hours= Math.floor(totalseconds/3600);
    const minutes= Math.floor((totalseconds%3600)/60);
    const seconds= totalseconds%60; 
    return `${hours} : ${minutes} : ${seconds}`;
}
const data = [
  { time: 0,temperature : 10},
  { time: 1800,temperature :  20},
  { time: 3600,temperature :  15},
  { time: 5400, temperature :  10},
  { time: 7200, temperature : 28},
];
const latestPoint = data.length > 0 ? data[data.length - 1] : null;

function Graph() {
  return (
    <div className ="graph-container">
    <LineChart 
    width={500} 
    height={300} 
    data={data}
    margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
    style ={{ backgroundColor: 'black'}}>
      
      <Line type="monotone"
       dataKey="temperature" 
       stroke="red" 
       strokeWidth={3}
       />
      <CartesianGrid stroke="#444444"
    />
      <XAxis
      dataKey="time"
      tickFormatter={formatted}
      stroke='#CCCCCC'
      label={{
        value :'Time (HH:MM:SS)' ,fill:'#0033A0', position: 'Bottom', offset: 20 , dy:27, fontSize:'22px'}}       
      style={{
      fill: '#FFFFFF',           
      fontSize: '14px',       
      fontWeight: 'bold',     
      fontFamily: 'Arial', 
      textAnchor: 'middle',  
      }}
    />
      <YAxis 
      stroke ='#CCCCCC'
      label = {{value :'Temperature (°C)' ,fill:'#0033A0', angle: -90, position: 'insideLeft', offset: 25,dy:60,fontSize:'22px'}}
      style={{
      fill: '#FFFFFF',           
      fontSize: '14px',       
      fontWeight: 'bold',     
      fontFamily: 'Arial', 
      textAnchor: 'middle',  
      }}
        />
      <Tooltip labelFormatter={formatted} 
    
        contentStyle={{ backgroundColor: 'white' ,border: 'none'}}
      />
      
    </LineChart>
          {latestPoint && (
        <div
          style={{
            color: "red",
            fontSize: "15px",
            fontWeight: "bold",
            marginTop: "10px",
            textAlign: "center"
          }}
        >
          Temperature:  {latestPoint.temperature.toFixed(2)}°C
        </div>
      )}
    </div>
  );
}

export default Graph;
