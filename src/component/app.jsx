import React, { Component } from "react";
import NavBar from "./navBar";
import Movies from "./movies";
import SideBar from "./sideBar";
import Buttom from './buttom';
import Main from "./main";
import AddMovie from "./addMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import AddMovie from './addMovie'

class App extends Component {
  state = {
    nowp:1,
wide:18,
num:0,
num2:18,
    color:["alert alert-info" ,"alert alert-primary" ,"alert alert-warning" ],
    likeV:[{}],
    
    movies: [
      {id: 1,name: "Die hard",genre: "Action",length: "2:20",like: false,},
      {id: 2,name: "The SpongeBob Movie",genre: "Comedy",length: "2:30",like: false,},
      {id: 3,name: "Fast five",genre: "Action",length: "4:20",like: false,},
      {id: 4, name: "Taken", genre: "Action", length: "1:20", like: false, },
      {id: 5, name: "Avenger", genre: "Action", length: "1:20", like: false, },
      {id: 6, name: "Spider-MAN", genre: "Action", length: "1:20", like: false,},
      {id: 7, name: "Boruto: Naruto the Movie", genre: "Anime", length: "1:20", like: false,},
      {id: 8, name: "The Matrix", genre: "Drama", length: "1:20", like: false,},
      {id: 9, name: " The Dark Knight", genre: "Action", length: "2:20", like: false,},
      {id: 10, name: "Lord Of The Rings-The return of the king", genre: "Fantasy", length: "1:20", like: false,},
      {id: 11, name: "forrest Gump", genre: "Drama", length: "1:20", like: false,},
      {id: 12, name: "Stars-Wars", genre: "Action", length: "1:20", like: false,},
      {id: 13, name: "Bleach The Movie 4", genre: "Anime", length: "1:20", like: false,},
      {id: 14, name: "Dragon Ball Z", genre: "Anime", length: "1:20", like: false,},
      {id: 15, name: "One Piece:Stamped", genre: "Anime", length: "2:20", like: true,},
      {id: 16, name: "Narnia", genre: "Fantasy", length: "1:20", like: false,},
      {id: 17, name: "Fullmetal Alchemist", genre: "Anime", length: "1:20", like: false,},
      {id: 18, name: "My Hero Academia 2", genre: "Anime", length: "1:20", like: false,},
    ],

    filterd: [ 
    {id: 1,name: "Die hard",genre: "Action",length: "2:20",like: false,},
    {id: 2,name: "The SpongeBob Movie",genre: "Comedy",length: "2:30",like: false,},
    {id: 3,name: "Fast five",genre: "Action",length: "4:20",like: false,},
    {id: 4, name: "Taken", genre: "Action", length: "1:20", like: false, },
    {id: 5, name: "Avenger", genre: "Action", length: "1:20", like: false, },
    {id: 6, name: "Spider-MAN", genre: "Action", length: "1:20", like: false,},
    {id: 7, name: "Boruto: Naruto the Movie", genre: "Anime", length: "1:20", like: false,},
    {id: 8, name: "The Matrix", genre: "Drama", length: "1:20", like: false,},
    {id: 9, name: " The Dark Knight", genre: "Action", length: "2:20", like: false,},
    {id: 10, name: "Lord Of The Rings-The return of the king", genre: "Fantasy", length: "1:20", like: false,},
    {id: 11, name: "forrest Gump", genre: "Drama", length: "1:20", like: false,},
    {id: 12, name: "Stars-Wars", genre: "Action", length: "1:20", like: false,},
    {id: 13, name: "Bleach The Movie 4", genre: "Anime", length: "1:20", like: false,},
    {id: 14, name: "Dragon Ball Z", genre: "Anime", length: "1:20", like: false,},
    {id: 15, name: "One Piece:Stamped", genre: "Anime", length: "2:20", like: true,},
    {id: 16, name: "Narnia", genre: "Fantasy", length: "1:20", like: false,},
    {id: 17, name: "Fullmetal Alchemist", genre: "Anime", length: "1:20", like: false,},
    {id: 18, name: "My Hero Academia 2", genre: "Anime", length: "1:20", like: false,},],
  };
  render() {
    
    return (
      
      <React.Fragment>
          
        
        <NavBar len={this.state.movies.length}
        len1={this.state.filterd.length}
        returnAll={()=>this.returnAll()}
        divide={(v)=>this.divide(v)}

        addNewMovies={(event,formik)=>this.addNewMovies(event,formik)}
        />


        <Main
        num={this.state.num}
        num2={this.state.num2} 
        nowp={this.state.nowp}
        addNewMovies={this.addNewMovies}
          myMovies={this.state.filterd}
          myDelete={(id) => this.handleDelete(id)}
          alerty={(id) => this.alertY(id)}
          isLike={(id) => this.isLike(id)}
        />
   
   


        <SideBar 
        len={this.state.movies.length}

        sumAction={()=>this.sumAction()} 
        sumComedy={()=>this.sumComedy()} 
        sumFantasy={()=>this.sumFantasy()} 
        sumDrama={()=>this.sumDrama()} 
        sumAnime={()=>this.sumAnime()}
        sumFavorite={()=>this.sumFavorite()} 

        filterAction={()=>this.filterAction()}
        filterComedy={()=>this.filterComedy()}
        filterFantasy={()=>this.filterFantasy()}
        filterAnime={()=>this.filterAnime()}
        filterDrama={()=>this.filterDrama()}
        filterFavorite={()=>this.filterFavorite()}
        filterAll={()=>this.filterAll()}
        
        />


<Buttom
movies={this.state.movies}
divide={ this.divide}
nowp={this.state.nowp}
activeChange={this.activeChange}
wide={this.state.wide}
/>


      </React.Fragment>
      
    );
  }

sumAction=()=>{
    let values = this.state.movies.filter((movie) => movie.genre ==='Action');
    return values.length;
}

sumDrama=()=>{
    let values = this.state.movies.filter((movie) => movie.genre ==='Drama');
    return values.length;
}

sumAnime=()=>{
    let values = this.state.movies.filter((movie) => movie.genre ==='Anime');
    return values.length;
}

sumFantasy=()=>{
    let values = this.state.movies.filter((movie) => movie.genre ==='Fantasy');
    return values.length;
}

sumComedy=()=>{
    let values = this.state.movies.filter((movie) => movie.genre ==='Comedy');
    return values.length;
}

sumFavorite=()=>{
    let values = this.state.movies.filter((movie) => movie.like ===true);
    return values.length;
}



filterAction=()=>{

    let values = this.state.movies.filter((movie) => movie.genre ==='Action');
    
    this.setState({filterd: values });
    
   
}

filterComedy=()=>{

  let values = this.state.movies.filter((movie) => movie.genre ==='Comedy');
  this.setState({filterd: values });
 
}

filterFantasy=()=>{

  let values = this.state.movies.filter((movie) => movie.genre ==='Fantasy');
  this.setState({filterd: values });
 
}

filterAnime=()=>{

  let values = this.state.movies.filter((movie) => movie.genre ==='Anime');
  this.setState({filterd: values });
 
}

filterDrama=()=>{

  let values = this.state.movies.filter((movie) => movie.genre ==='Drama');
  this.setState({filterd: values });
 
}

filterFavorite=()=>{

  let values = this.state.movies.filter((movie) => movie.like ===true);
  this.setState({filterd: values });
 
}

SelectNum=(num)=>{
  let i=0;
let values=this.state.movies.splice(i,num+1)
const myMovies=this.state.movies;
this.setState({filterd:myMovies})
}

divide=(ev)=>{
  if(ev.key==='Enter'&&ev.target.value<this.state.movies.length){
  this.setState ({wide:ev.target.value})
 this.setState ({num:0})
 this.setState ({num2:ev.target.value})
}
else if(ev.target.value>this.state.movies.length)
  alert('Too many Movies \n please select fewer movies ')

}

// nowp:1,now page
// wide:18, how many page
// num:0, 
// num2:18,

activeChange=(num)=>{
  this.state.num=this.state.wide*num-this.state.wide;
  this.state.num2=this.state.wide*num;
  this.setState({nowp:num});
  this.setState({num:this.state.num})
  this.setState({num2:this.state.num2})
}



addNewMovies=(val)=>{
 
  
  const movieNewe={
    id:this.state.movies.length+1,
    name  : val.name,
    genre :val.genre,
    length:val.length,
    like:false


  }
this.state.movies.push(movieNewe);
this.state.filterd.push(movieNewe);
this.setState({movies: this.state.movies})
  this.setState({filterd:this.state.filterd})
  
}


  alertY = (id) => {
    if (id % 3 == 1) return this.state.color[0];
    else if (id % 3 == 2) return this.state.color[1];
    else {
      return this.state.color[2];
    }
  };


  returnAll(){
    const myMovies=this.state.movies;
    this.setState({filterd:myMovies})
  }
  

  handleDelete = (id) => {
    const filterd = this.state.movies.filter((movie) => movie.id !== id);

   this.setState({movies: filterd });
   
   this.setState({ filterd: filterd });
   
    
   
  };

  isLike = (id) => {
    const values = this.state.filterd.map((movie) => {
      if (id === movie.id){

       if( movie.like === false)
       movie.like = true;
      else {
        movie.like = false;
      }}
      return movie;
    });
    
    this.setState({ filterd: values });
    
  };


}

export default App;
