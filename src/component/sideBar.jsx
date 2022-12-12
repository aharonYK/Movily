import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        const {mygenere ,amount,filterAction,filterComedy,filterFantasy,
          filterDrama,filterFavorite,filterAnime,filterAll} =this.props;
        const mystyle = {
            
            fontcolor:'black',
            fontFamily: "Ariel", 
            width:'15%',
           hight:'100%',
            marginTop:'10%',
            position:'fixed'
        
        

          };
      
      
      
        return (
            
            <nav class="nav flex-column alert alert-info"style={mystyle} >
             <button type="button" class="btn btn-info position-relative" onClick={filterAction}>
  Action
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
  
    {this.props.sumAction()}
  
  </span>
</button>
        <p></p>

        <button type="button" class="btn btn-info position-relative" onClick={filterComedy}>
  Comedy
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {this.props.sumComedy()}
    
  
  </span>
</button>
        <p></p>
        <button type="button" class="btn btn-info position-relative" onClick={filterFantasy}>
  Fantasy
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {this.props.sumFantasy()}
  
  </span>
</button>
        <p></p>
        <button type="button" class="btn btn-info position-relative" onClick={filterAnime}>
  Anime
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {this.props.sumAnime()}
  
  </span>
</button>

<p></p>

<button type="button" class="btn btn-info position-relative" onClick={filterDrama}>
  Drama
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {this.props.sumDrama()}
  
  </span>
</button>

<p></p>
<button type="button" class="btn btn-warning position-relative" onClick={filterFavorite}>
  Favorie
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {this.props.sumFavorite()}
  
  </span>
</button>
</nav>
            
        );
    }
}

export default SideBar;
