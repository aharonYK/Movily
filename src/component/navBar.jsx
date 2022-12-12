import AddMovie from "./addMovie";
import Movies from "./movies";
import { Link } from "react-router-dom";
const mystyle = {
    color: "Black",
  //  backgroundColor: "#07D9FF",
    
    fontFamily: "Arial",
    flexDirection:'row',
    marginLeft:'60%',
    position:'absolute',
  width:'12%',
  };    

  const mystyle1 = {
  
  
  
    fontFamily: "Arial",
    flexDirection:'row',
   
    position:'absolute',
  width:'12%',

    
  };    


const NavBar = props => {
    const {len ,len1, amount,returnAll,divide} = props;
    return (  

    <nav className="bg-info" >       
          <Link to='/'>    <span type s="button" class="btn btn-primary position-relative"onClick={returnAll} >
          <span>   Moviely: {len} MOVIES </span>
        </span>
        </Link>

      <Link to='/addNew'>  <span class="btn btn-warning"style={mystyle1} >Add movie</span> </Link>

        <input id='in1' style={mystyle}  type="number" max={len1} min='1' class="btn btn-danger" placeholder='press ENTER' onKeyDown={(ev)=>divide(ev)} >
          
       </input>
     

  
    </nav>
    
 );
}
 
export default NavBar;