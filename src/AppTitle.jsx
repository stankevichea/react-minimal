import React from 'react';

const generateArray = (n) =>(
  Array.from({length: n}, (_, i) => i+1 )
  )



export default class AppTitle extends React.Component {
 render() {
    return (
      <div>
         
        <p>Hello World!</p>
            
      </div>
      
    )
  }
}