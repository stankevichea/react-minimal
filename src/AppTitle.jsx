import React from 'react';
import Button from "react-bootstrap/Button";
import { Component } from 'react';

//json
const  data=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
];







//functions
const generateArray = (n) =>(
  Array.from({length: n}, (_, i) => i+1 )
  )
const generateRandomArray = (n) =>(
    Array.from({length: n}, () => Math.floor(Math.random() * 25 + 1))
    )

//variables
const arr = [2, 56, 23, 88, 17, 4];
const root= [2, 5, 8, 10];
const dataallstudents=data.map(teacher=>teacher.students.map(student=>student.name));
const sortdataallstudents=data.map(teacher=>teacher.students.map(student=>student.name));
const olddataallstudents=data.map(teacher=>teacher.students.filter(student=>student.age>20).map(student=>student.name));

//methods
var roots = (rootik) => {
  return rootik.map(x=>Math.sqrt(x));
};

//actions
sortdataallstudents.sort();

export default class AppTitle extends React.Component {
  constructor() {
    super();
   

    this.allstudents=this.allstudents.bind(this);
    this.sortstudents=this.sortstudents.bind(this);
    this.oldstudents=this.oldstudents.bind(this);
    this.state={
      selectedstudents:[],
      a:0,
      b:0
    };
  }

  changeHandlerA = event => {
    this.setState({
      a: event.target.value
    });
    console.log('Value changed A:' + event.target.value);
  }
  changeHandlerB = event => {
    this.setState({
      b: event.target.value
    });
    console.log('Value changed B:' + event.target.value);
  }
  allstudents(){
  
    this.setState({selectedstudents:dataallstudents});
  };

  sortstudents(){
  
    this.setState({selectedstudents:sortdataallstudents});
  };

   
  oldstudents(){
  
    this.setState({selectedstudents:olddataallstudents});
  };

 render() {

    return (
      <div>
         
        Hello World!
        <p>{generateRandomArray(5).toString()}</p>
        <p>{(arr.filter(number=> number>15)).toString()}</p>    
        <p>{roots(root).toString()}</p>
        <p><Button onClick={this.allstudents}>All students</Button></p>  
        <p><Button onClick={this.sortstudents}>Sorted students</Button></p> 
        <p><Button onClick={this.oldstudents}>Old students</Button> </p>
        <h7>{this.state.selectedstudents.toString()}</h7>
        <form>
          <input type="number" 
                 name="a"   
                 value={this.state.a} 
                 onChange={this.changeHandlerA} 
          />
      </form>
      <form>
          <input type="number" 
                 name="b"   
                 value={this.state.b} 
                 onChange={this.changeHandlerB} 
          />
      </form>
      
      </div>
      
    )
  }
}