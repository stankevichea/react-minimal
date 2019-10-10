import React from 'react';
//functions
const generateArray = (n) =>(
  Array.from({length: n}, (_, i) => i+1 )
  )
const generateRandomArray = (n) =>(
    Array.from({length: n}, () => Math.floor(Math.random() * 25 + 1))
    )

//variables
const arr = [2, 56, 23, 88, 17, 4];

export default class AppTitle extends React.Component {
 render() {
    return (
      <div>
         
        <p>Hello World!</p>
        <p>{generateRandomArray(5).toString()}</p>
        <p>{(arr.filter(number=> number>15)).toString()}</p>    
      </div>
      
    )
  }
}