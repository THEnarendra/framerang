import React, { useState } from "react";
import axios from 'axios'

export const Customize =()=>{
    const [photos, setPhotos] = useState([]);
    const [size, setSize] = useState('');
    const [customText, setCustomText] = useState('');
    const [logoCover, setLogoCover] = useState(null);
    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState([]); 
    const [data, setData] = useState();
  
    // const handlePhotoUpload = (event) => {
      
    // };
  
    const generatePreview = (files) => {
      const previewUrls = files.map((file) => URL.createObjectURL(file));
      setPreview(previewUrls);
    };
  
  
    const handleTextChange = (event) => {
      setData({...data,[event.target.name] : event.target.value});
      // setCustomText(event.target.value)
    };
  
    const handlePhotoUpload = (e) => {
      e.preventDefault();
      const files = Array.from(e.target.files);
      setPhotos(files);
      generatePreview(files);
      
      if(e.target.files.length < 5){
      setLogoCover(files);
      const selectedFIles = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles];
      targetFilesObject.map((file) => {
        return selectedFIles.push(URL.createObjectURL(file));
      });
      }    
      else{
        alert("error")
      }
    };
    console.log(logoCover);
    // console.log(photos);

    const formData = new FormData();
    const handleSubmit = async (e) => {
      e.preventDefault();
      formData.append("size", data.size);
      formData.append("customText", data.customText);
      if(logoCover){
        logoCover.forEach((image) => {
          formData.append(`images`, image);
        });
      }
      
  
      console.log(formData);
        const config = {
          url:`https://framerang-backend.vercel.app/api/v1/customPoster`,
          method:'post',
          headers: {
            // 'Content-Type': 'application/json',
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          },
          data: formData
        }
        try {
          const response = await axios(config);
          console.log(response);
          // if(response.status===200){
          //   toast.success("Update Successful");
          // }
          // else {
          //   toast.error("Somthing went Wrong! Please try after some time!")
          // }
        }
        catch  (error){
          console.log(error.message);
        }
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
                <select id="size" className="form-select" name="size" onChange={handleTextChange}>
                  <option value="">Select size</option>
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="customText" className="form-label">Custom Text:</label>
                <input
                  type="text"
                  className="form-control"
                  id="customText"
                  // value={customText}
                  name="customText"
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