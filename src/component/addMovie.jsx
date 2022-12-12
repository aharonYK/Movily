import { useFormik} from 'formik'
import React, { Component } from 'react'

const mystyle = {
    color: "blue",
  //  backgroundColor: "#07D9FF",
    position:'fixed',
    fontFamily:"David",
   top:'11vw',
   left:'25vw',
   width:'100%',

  };    


const AddMovie = (props)=>{
   
    const formik= useFormik({
        initialValues:{
            name:"",        
            genere:"",
            length:"",
            like:false
        }
    });
   
    return(
        
        <div className='m-5' style={mystyle} >
        <form 
           onSubmit={(e)=>{
            e.preventDefault();
            props.addNewMovies(formik.values)
         } }>
            <div >
                <label className='form-labe' >  Name </label>
                <input  style={{width:'25%'}}
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your movie name "
                value={formik.values.name}
                required
                onChange={formik.handleChange}
                />
            </div>


            <div>
    
            <label for="inputState" class="form-label">Genere</label>
    <select id="genre" name="genre"  class="form-select" onChange={formik.handleChange} 
    style={{width:'25%'}}  required >
      <option defaultChecked>Choose...</option>
      <option  value='Action'>Action</option>
      <option  value='Drama'>Drama</option>
      <option value='Fantasy'>Fantasy</option>
      <option value='Anime'>Anime</option>
      <option  value='Comedy'>Comedy</option>
    </select>

            </div>

            <div>
                <label className='form-labe' > length </label>
                <input  style={{width:'25%'}}
                className="form-control"
                 type="length"
                 name="length"
                 required
                 onChange={formik.handleChange}
                 />
            </div>

            <button type="submit" className=' mt-3 btn btn-primary' 
           >Done Done Done </button>


        </form>
    </div>


    );    
}

export default AddMovie;