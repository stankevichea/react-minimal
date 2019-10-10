import React from 'react';

const generateArray = (n) =>(
  Array.from({length: n}, (_, i) => i+1 )
  )
const generateRandomArray = (n) =>(
    Array.from({length: n}, () => Math.floor(Math.random() * 25 + 1))
    )


export default class AppTitle extends React.Component {
 render() {
    return (
      <div>
         
        <p>Hello World!</p>
        <p>{generateRandomArray(5).toString()}</p>    
      </div>
      
    )
  }
}