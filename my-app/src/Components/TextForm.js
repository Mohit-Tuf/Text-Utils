import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText);
    }
    const handleOnChnage = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here2');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>

        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChnage} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleClear}>ClearText</button>

        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Previes</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
