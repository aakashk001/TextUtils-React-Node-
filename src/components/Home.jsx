import { useState } from 'react';

export default function Home(props){
    const [text,setText]  = useState('Enter Your Text Here')
    
    //Handling Text Area
    let handleOnChange = (event)=>{
        setText(event.target.value);
    }

    //Handling UpperCase Button 
    let handleUpperCase = (event)=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlerts(' Converted to upper case','success')
    }

    //Handle LowerCase Button 

    let handleLowerCase = (event) =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlerts(' Converted to lower case','success')
    }
    //Hanlde Clear Text Button 

    let handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlerts('Text area cleared successfully','success')
    }



    return (
        <>
        <div className = {`container text-${props.mode === 'light'?'dark':'light'} my-5`}>
               <div >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control mx-3" id="exampleFormControlTextarea1" value = {text} rows="8" onChange={handleOnChange}></textarea>
               </div>
               <button type = "button" className = {`btn btn-${props.mode === 'light'?'secondary':'dark'} mx-3 my-1`} onClick={handleUpperCase}>Conver To UpperCase</button>
               <button type = "button" className = {`btn btn-${props.mode === 'light'?'secondary':'dark'} mx-3 my-1`} onClick={handleLowerCase}>Conver To LowerCase</button>
               <button type = "button" className = {`btn btn-${props.mode === 'light'?'secondary':'dark'} mx-3 my-1`} onClick={handleClearText}>Clear Text</button>
           </div>
           <div className = {`container my-3 text-${props.mode == 'dark'?'light':'dark'}`}>
                    <h4>Your Text Summary</h4>
                   <p>{text.split(/\s+/).filter((element)=>{
                    return element.length !==0
                   }).length} words {text.length} characters</p>
           </div>
           <div className = {`container my-3 text-${props.mode == 'light'?'dark':'light'}`}>
               <h4>Preview Of Text</h4>
               <p>{text}</p>
           </div>
       
       
       </>
    )
}