import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ex1 from './ExampleDigitImages/ex1.png';
import ex2 from './ExampleDigitImages/ex2.png';

import './Home.css';

function Home() 
{
  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [outputColor, setOutputColor] = useState('white')

  function handleImage(e) 
  {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
    
    if (selectedFile)
    {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
    }
  }

  async function handleClick() 
  {
    const formData = new FormData();
    formData.append('file', file);

    try
    {
      const res = await axios.post('http://localhost:8080/upload', formData, 
                                  { headers: { 'Content-Type': 'multipart/form-data' } });

      setResult("Number: " + res.data.result);
      setOutputColor('white');
    } 
    
    catch (error) 
    { 
      setResult("Error uploading file. Please try again."); 
      setOutputColor('red');
    }
  }
  

  return (
    // <div className='app-container'>
      
      <div className='app-container'>
           
        <h1 className='title'>Digit Recognition</h1>
        <h2 className='author'>
          by: Shiv Malik
        </h2>

        <h3 className='description'>
          Welcome to my digit recognition tool! Please upload a 28x28 image with your
          handwritten image and click 'Submit' to get the model's results. Please ensure the following:
        </h3>  

        <h4>
        1. Ensure your image's resolution is 28x28 pixels and the photo is either a JPEG or PNG file.<br/>
        2. Ensure the coloring is black-white contrasted. See examples below.
        </h4>

        <img src={ex1} alt='unable to load'/>
        <img src={ex2} alt='unable to load'/>

        
        <p>
          To learn more
          about this tool, feel free to visit <Link to='/about'>About</Link>.
        </p>
        <input
          type = "file"
          name = "file"
          onChange = {handleImage}
          accept = "image/*"
          className = "file-input"
        />

        {image && (
          <div className = "image-preview-container">
            <img src={image} alt="Uploaded Preview" className="preview-image" />
          </div>
        )}

        <button onClick={handleClick} className='submit-button'>Submit</button>
        

        {result !== null && (
          <h2 className='result-text' style={{color: outputColor}}>{result}</h2>
        )}
      </div>
  );

  
}


export default Home
