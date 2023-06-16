import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { Link } from "react-router-dom";
export default function AnalyzingImage(){

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');
  const [textResult, setTextResult] = useState('');
  const [progress, setProgress] = useState(0);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(textResult);
  }

  const handleImageConversion = () => {
    if (!image) {
      return;
    }
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setTextResult(result.data.text);
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleImageConversion();
  }

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row h-100">
        <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
          {!isLoading && (
            <h1 className="text-center py-5 mc-5">Image To Text</h1>
          )}
          {isLoading && (
            <>
              <progress className="form-control" value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p className="text-center py-0 my-0">Converting:- {progress} %</p>
            </>
          )}
          {!isLoading && !textResult && (
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleImageUpload}
                className="form-control mt-5 mb-2"
                required
              />
              <input
                type="submit"
                className="btn btn-primary mt-5"
                value="Convert"
              />
            </form>
          )}
          {!isLoading && textResult && (
            <>
              <textarea
                className="form-control w-100 mt-5"
                rows="30"
                value={textResult}
                onChange={(e) => setTextResult(e.target.value)}
              ></textarea>
               <button onClick={(e) =>{ setIsLoading(false); setTextResult("")}}>retry</button>
               <button onClick={handleCopyClick}><Link to="/AnalyzeText" >copy and go to analyze sentiment</Link></button>

              
              {/* <input type="submit" onChange={(e) => setIsLoading(true)}>retry</input> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};