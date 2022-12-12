import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom';
import AddMovie from './addMovie';
import Movies from './movies';

export default class main extends Component {
  render() {
    const{num,num2,myMovies,myDelete,alerty,isLike,addNewMovies}=this.props
    return (

      <React.Fragment>
<Routes>


<Route path="/addNew" 
element={<AddMovie 
 
  
  addNewMovies={(val)=>this.props.addNewMovies(val)}
  

/>} />

<Route path="/" element={<Movies
num={num}
num2={num2}
 myMovies={myMovies}
 myDelete={myDelete}
 alerty={alerty}
 isLike={isLike} 
 
 />} />

</Routes>
      </React.Fragment>
      
    )
  }
}
