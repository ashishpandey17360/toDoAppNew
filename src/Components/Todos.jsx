/* eslint-disable react/jsx-key */
// import { useState } from "react";
import { useState } from "react";
import Notes from "../Components/Images/Notes.png";

function Todos() {
  const [input, setInput] = useState();
  const [item, setItem] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {

    if(!input){
      alert("Please enter a task");
      return;

    }else{
      setItem([...item, input]);
      setInput("");

    }
   
  }


  function deleteItem(id){

   const updatedItem= item.filter((val,index) => {
     return index !== id;
  })

  setItem(updatedItem);

  }

// remove all
function removeAll(){
  setItem([]);
}

  return (
    <>
      <img className="noteslogo  mx-auto  d-block  " src={Notes} alt="sorry" />
      <h3 className="text-center mt-1">Add your list here</h3>
      <div className="input-group mb-3  w-50 align-center mx-auto mt-3">
        <input
          type="text"
          className="form-control input"
          placeholder="Add your notes 👍"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleChange}
          value={input}
          // value={input}
        />
        <button
          className="btn btn-outline-secondary mr-2 mx-2"
          onClick={handleSubmit}
         
          type="button"
          id="button-addon2"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

      {item.map((itemval ,index)=>{
        return(
          <div className="card d-flex showList">
        <div className="card-body d-flex  eachItem "  key ={index}>
          <h5 className="card-title bg-dark ">{itemval}</h5>
          <i className="fa-solid fa-trash"
          
          onClick={() => deleteItem(index)}
          
          
          ></i>
        </div>
      </div>
          
        )
      })}

     
      <button type="button" className="btn btn-primary my-5 space hover-element" onClick={removeAll}></button>
      {/* <button className="myButton">Click me</button> */}
    </>
  );
}

export default Todos;
