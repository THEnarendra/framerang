import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast, Toaster } from "react-hot-toast";
import Loader from "../Loader";
import { CartContext } from "../../CartContext";

export const Customize = ({ setFooter }) => {
  const { addToCart } = useContext(CartContext);

  setFooter(false)
  const [photos, setPhotos] = useState([]);
  const [size, setSize] = useState('');
  const [customText, setCustomText] = useState('');
  const [category, setCategory] = useState('');
  const [logoCover, setLogoCover] = useState(null);
  const [value, setValue] = useState([]);
  const [preview, setPreview] = useState([]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.opacity = '0.5';
      document.body.style.pointerEvents = 'none';
    } else {

      document.body.style.opacity = '1';
      document.body.style.pointerEvents = 'auto';

    }

  }, [loading])

  const generatePreview = (files) => {
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };


  const price1 = category === "poster" && value === "A3" ? 10 : category === "poster" && value === "A4" ? 20 : category === "frame" && value === "A3" ? 40 : category === "frame" && value === "A4" ? 60 : ""


  const handleTextChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handlePhotoUpload = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setPhotos(files);
    generatePreview(files);

    if (e.target.files.length < 5) {
      setLogoCover(files);
      const selectedFIles = [];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles];
      targetFilesObject.map((file) => {
        return selectedFIles.push(URL.createObjectURL(file));
      });
    }
    else {
      alert("error")
    }
  };

  const formData = new FormData();


    const handleClick = (data) => {
     
        const productWithSelectedVariant = {
          _id:data._id,
          variant:[data.variant],
          productImage:data.images[0],
            category:category,
            Size: value, 
            productName: "Custom Order",
        };
        console.log(productWithSelectedVariant);
      
        setTimeout(() => {
            toast.success("Product Added to Cart Successfully");
            setLoading(false);
            addToCart(productWithSelectedVariant);  
        }, 100); // 2000 milliseconds = 2 seconds
  
      
  };



  const handleSubmit = async (e) => {

    setLoading(true)
    e.preventDefault();

    formData.append("size", value);
    formData.append("customText", data.customText);
    formData.append("newPrice", price1);
    formData.append("category", data.category);
    if (logoCover) {
      logoCover.forEach((image) => {
        formData.append(`images`, image);
      });
    }

    const config = {
      url: 'https://framerang-backend.vercel.app/api/v1/customPoster',
      method: 'post',
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData
    };
    
    try {
      const response = await axios(config);
      if (response.data.success === true) {
        console.log(response.data.newPoster);
        handleClick(response.data.newPoster);
      } else {
        setLoading(false);
        toast.error("Something went wrong! Please try again later!");
      }
    }
    catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  };

  return (
    <div style={{ marginTop: 150 }} className="container">
      {loading && <div className="overlay"><Loader /></div>}
      <Toaster />
      <h1 className="text-center">Customize Your Poster or Frame</h1>
      <div className="row">
        <div className="col-md-6">
          <form >
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
              <label htmlFor="size" className="form-label">Select Category:</label>
              <select id="size" className="form-select" name="category" onChange={(e) => (handleTextChange, setCategory(e.target.value))}>
                <option value="">Select Category</option>
                <option value="poster">Poster</option>
                <option value="frame">Frame</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label">Select Size:</label>
              <select id="size" className="form-select" name="size" onChange={(e) => (handleTextChange, setValue(e.target.value))}>
                <option value="">Select size</option>
                <option value="A4">A4</option>
                <option value="A3">A3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="size" className="form-label" >Price</label>
              <input name="newPrice" placeholder={price1} type="text" onChange={handleTextChange} readOnly />
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
            <button onClick={handleSubmit} type="button" className="btn btn-primary">Add to Cart</button>
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