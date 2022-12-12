import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination';

export default class Buttom extends Component {
    styl={
        position:'fixed',
        top:'95vw',
        left:'2vh'
    }
     mystyle1 = {
        color: "white",
        fontcolor:'black',
        fontFamily: "Ariel", 
        marginTop:'510px',
        marginLeft:'45%',
        position:'fixed'
    
    
      };

  render() {
      const{nowp,activeChange,divide,movies,wide}=this.props;
      
      let item=[]; 
      console.log(item);
      console.log(divide);
      console.log(movies.length);

      for(let number=1;number<=Math.ceil(movies.length/wide);number++){ 
         
        console.log(number);
        item.push(
            <Pagination.Item 
            key={number} 
            onClick={()=>activeChange(number)}
            >
            {number}
          </Pagination.Item>);
         

      }
    return (

<div id='paginationContainer' style={ this.mystyle1}>
<Pagination id='paginationContainer'>{item}</Pagination>
</div>
    );
  }
}
