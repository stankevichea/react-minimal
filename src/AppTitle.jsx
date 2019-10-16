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


const setTimeout = () =>{

  rendercount++;
  console.log("render - "+ rendercount.toString()+":")
  console.timeEnd("render");
 
};
const setstart = () =>{
  console.time("render");

};
const blia = () =>{
  console.log("czmo");

};

const generateArraylab2 = (a,b) =>(
  Array.from({length: b-a+1}, (_,i) => (a)+i )
  )


//functions
const generateArray = (n) =>(
  Array.from({length: n}, (_, i) => i+1 )
  )
const generateRandomArray = (n) =>(
 
    Array.from({length: n}, () => Math.floor(Math.random() * 25 + 1))
    )

//variables
const arr = [2, 56, 23, 88, 17, 4];
const root= [2, 5, 8, 10,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4,2, 56, 23, 88, 17, 4];
const dataallstudents=data.map(teacher=>teacher.students.map(student=>student.name));
const sortdataallstudents=data.map(teacher=>teacher.students.map(student=>student.name));
const olddataallstudents=data.map(teacher=>teacher.students.filter(student=>student.age>20).map(student=>student.name));
var rendercount=0;
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
      b:0,
      lab2array:[],
      srtarray:[],
      ifclicked:false,
      alreadydisplayed:false}
  }

 
  changeHandlerA = event => {
    this.setState({
      a: event.target.value
    });
    console.log('Value changed A:' + event.target.value);
    if(parseInt(event.target.value)<parseInt(this.state.b) && parseInt(event.target.value)!=0)
    {  this.setState({
        lab2array: generateArraylab2(parseInt(event.target.value),parseInt(this.state.b)),
      alreadydisplayed:false});
    }
    else
    {
      this.setState({lab2array: []});
    }
    
  }
  changeHandlerB = event => {
    this.setState({
      b: event.target.value
    });
    if(parseInt(this.state.a)<parseInt(event.target.value) )
    {  this.setState({
        lab2array: generateArraylab2(parseInt(this.state.a), parseInt(event.target.value)),
        alreadydisplayed:false});
        
    }
    else
    {  
      this.setState({lab2array: []});
    }
    
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


  rerenderArray =() =>{
    this.setState({
    ifclicked: !this.ifclicked,
  
})
if(!this.state.alreadydisplayed)
{
  
  this.setState({srtarray: roots(this.state.lab2array),
                 alreadydisplayed:true });

}

}
 render() {
 
    return (
      <div>
      { setstart()}
        Hello World!
        <p>{generateRandomArray(5).toString()}</p>
        <p>{(arr.filter(number=> number>15)).toString()}</p>    
        <p>{roots(root).toString()}</p>
        <p><Button onClick={this.allstudents}>All students</Button></p>  
        <p><Button onClick={this.sortstudents}>Sorted students</Button></p> 
        <p><Button onClick={this.oldstudents}>Old students</Button> </p>
        <h7>{this.state.selectedstudents.toString()}</h7>
        <h4>Lab2</h4>
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

      <p>{this.state.lab2array.toString()}</p>
    
        <p><Button onClick={this.rerenderArray}  >Process array</Button></p>  
      <b>{this.state.ifclicked ? this.state.srtarray.toString() : '' }</b>





      {setTimeout()}

      </div>
         
  
      
    )
    
    
  }
}