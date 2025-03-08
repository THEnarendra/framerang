import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { toast, Toaster } from "react-hot-toast";
import Loader from "./Loader";
import "../MainCss/Popup.css";
import { useNavigate } from "react-router-dom";

const Popup = ({ togglePopup, id, img, setIsCartOpen }) => {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      document.body.style.opacity = "0.5";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.opacity = "1";
      document.body.style.pointerEvents = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="overlay">
          <Loader />
        </div>
      )}
      <Toaster />
      {img
        ?.filter((e) => e._id === id)
        .map((data) => (
          <Row className="row1" key={data._id}>
            <span onClick={togglePopup} className="btPopup">
              ❌
            </span>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
              lg={6}
            >
              <img
                className="img12"
                src={data.productImages[0]?.url}
                alt="product"
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              lg={6}
            >
              <span>Framerang</span>
              <h1>{data.productName}</h1>
              {/* <span>Single pcs</span> */}

              {/* ✅ Show Price Based on Variants */}
              {data.hasVariants ? (
                <>
                  {/* <p>Size:</p> */}
                  <div>
                    {data.variants.map((variant) => (
                      <div key={variant._id} className="variant-group">
                        <p>
                          <strong>{variant.variantName}:</strong>
                        </p>
                        <div>
                          {variant.options.map((option) => (
                            <button
                              key={option._id}
                              className={`bt3 me-3 ${
                                selectedVariant?.value === option.value
                                  ? "selected"
                                  : ""
                              }`}
                              onClick={() => {
                                setSelectedVariant({
                                  ...option,
                                  variantName: variant.variantName,
                                });
                                setError(false);
                              }}
                            >
                              {option.value}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedVariant && (
                    <div className="mt-2">
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        Rs. {selectedVariant.price.oldPrice}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span style={{ fontSize: "22px" }}>
                        Rs. {selectedVariant.price.newPrice}
                      </span>
                    </div>
                  )}
                  {error && (
                    <p style={{ color: "red" }}>! Please Select Size First </p>
                  )}
                </>
              ) : (
                <div className="mt-2">
                  <span style={{ fontSize: "22px" }}>Rs. {data.basePrice}</span>
                </div>
              )}
<br />
              <div className="d-flex">
                <button
                  onClick={() => {
                    if (data.hasVariants && !selectedVariant) {
                      setError(true);
                    } else {
                      setLoading(true);
                      togglePopup();
                      setIsCartOpen(true);
                      setTimeout(() => {
                        toast.success("Product Added to Cart Successfully");
                        setLoading(false);
                        addToCart({
                          ...data,
                          selectedVariant: selectedVariant
                            ? {
                                name: selectedVariant.variantName,
                                value: selectedVariant.value,
                                price: selectedVariant.price.newPrice,
                              }
                            : null,
                        });
                      }, 100);
                    }
                  }}
                  className="bt4"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() =>
                    navigate("/ProductPage", { state: { product: data } })
                  }
                  className="bt4 ms-2"
                >
                  MORE DETAILS
                </button>
              </div>
            </Col>
          </Row>
        ))}
    </>
  );
};

export default Popup;
