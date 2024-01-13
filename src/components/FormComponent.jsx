import React, { useRef } from 'react'

const FormComponent = () => {

    /* userRef() returns the object which having the current property
    it will never re-render the dom element 

     */

   const nameElement= useRef();
   const ageElement=useRef();
   
   const submitElement=useRef();
  
   
   


    const submitHandler=(event)=>{
       event.preventDefault();
       let obtainedName=nameElement.current.value;
       let obtainedAge=ageElement.current.value;
       console.log(`name is:${obtainedName} and age is:${obtainedAge}`);
       
    }

    const clickHandler=()=>{
      submitElement.current.style="color:blue";
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter your name</label>
            <input type="text" id='name' placeholder='enter your name ' ref={nameElement} />
            <br />
            <label htmlFor="name">Enter your age</label>
            <input type="number" id='name' placeholder='enter your age ' ref={ageElement} />
            <br />
            <br />
            <input type="submit" value="submit" ref={submitElement} style={{color:"red"}} onClick={clickHandler}/>
            <br />
        </form>
    </div>
  )
}

export default FormComponent