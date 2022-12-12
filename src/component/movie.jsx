import React, { Component } from 'react';



class Movie extends Component {
    state ={
        
    };

    render() { 
      const {alerty,like}=this.props;
      const mystyle = {
       
       // backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        
      };
      
        return (             
                    <tbody >
                   
      <tr className={alerty}  style={mystyle}>
   
      <td> {this.props.id}</td>
          <td >{this.props.name}</td>
          <td>{this.props.genre}</td>
          <td>{this.props.length}</td>
        
          <td> 
            <i className={  (like===true)  ? ("bi bi-suit-heart-fill") : ("bi bi-suit-heart")} onClick={this.props.islike} >
 
 </i>
    
 
            
</td>
        <td> <button onClick={this.props.delete} className="btn btn-danger m-2 ">Delete</button> </td>

       

      </tr>
                </tbody>

               
        
    )}
    
}



export default Movie;
