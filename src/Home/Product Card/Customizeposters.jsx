import React, { useState } from "react";

export const Customize =()=>{
    const [photos, setPhotos] = useState([]);
    const [size, setSize] = useState('');
    const [customText, setCustomText] = useState('');
    const [preview, setPreview] = useState([]);
  
    const handlePhotoUpload = (event) => {
      const files = Array.from(event.target.files);
      setPhotos(files);
      generatePreview(files);
    };
  
    const generatePreview = (files) => {
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreview(previewUrls);
    };
  
    const handleSizeChange = (event) => {
      setSize(event.target.value);
    };
  
    const handleTextChange = (event) => {
      setCustomText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Submitted:', { photos, size, customText });
    };
  
    return (
        <div style={{marginTop:160,marginBottom:150}} className="container">
        <h1 className="text-center">Customize Your Poster or Frame</h1>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="photos" className="form-label">Upload Photos:</label>
                <input
                  type="file"
                  className="form-control"
                  id="photos"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="size" className="form-label">Select Size:</label>
                <select id="size" className="form-select" value={size} onChange={handleSizeChange}>
                  <option value="">Select size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="customText" className="form-label">Custom Text:</label>
                <input
                  type="text"
                  className="form-control"
                  id="customText"
                  value={customText}
                  onChange={handleTextChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <h2 className="text-center mt-4">Preview Of Your Selected Images</h2>
            <div className="d-flex flex-wrap justify-content-center mt-3">
              {preview && preview.map((url, index) => (
                <div key={index} className="m-2">
                  <img
                    src={url}
                    alt={`Preview ${index}`}
                    className="img-thumbnail"
                    style={{ maxWidth: '150px', maxHeight: '150px' }}
                  />
                </div>
              ))}
            </div>
            {size && <p className="text-center mt-3">Selected Size: {size}</p>}
            {customText && <p className="text-center mt-1">Custom Text: {customText}</p>}
          </div>
        </div>
      </div>
    );
}