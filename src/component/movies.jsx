import React, { Component ,useEffect,useState} from 'react'
import Movie from './movie'
import Buttom from './buttom';
 class Movies extends Component {
    state = {
    
    }


  render() {
    const {myDelete,myMovies,isLike,alerty,like,num,num2}=this.props;

    const mystyle = {
      color: "Black",
  
      padding: "10px",
      fontFamily: "Arial",
      flexDirection:'row',
      marginLeft:'15%',
      position:'absolute',
    width:'85%',
      
    };    
 

    
    return (
      <div style={mystyle} >

              <table className="table" >
                
  <thead >
    <tr>
     
      <th>Name:</th>
      <th>Id:</th>
      <th>Genre:</th>
      <th>Length:</th>
      <th>Like:</th>
      </tr>
  </thead>
 

  
                {myMovies.slice(num,num2).map(movie =>(
                     <Movie
                     
                     id={movie.id}
                     name={movie.name}
                     genre={movie.genre}
                     length={movie.length}
                     like={movie.like}    
                     delete={()=>myDelete(movie.id)}
                     islike={()=>isLike(movie.id)} 
                    alerty= {alerty(movie.id)}
                     >






                     </Movie>
                    
                    

                    ))}
                    
             </table>
        </div>
    )
  }












}
export default Movies;