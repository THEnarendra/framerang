import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useProducts } from "../../Context/ProductContext";
import Loader from "../Loader/Loader";
import { fromSlug } from "../../utils/Slugify"; 
import '../../MainCss/Posters.css'
import NotFoundPage from "../NotFoundPage";
import Popup from "../Popup/Popup";

export const Posters = ({ setFooter, theme, setIsCartOpen }) => {
  const { category, subCategory } = useParams();
  const { categories, products, subcategories, filterByCategory, filterBySubcategory } = useProducts();

  const decodedCategory = fromSlug(category);
  const decodedSubCategory = subCategory ? fromSlug(subCategory) : "Select SubCategory";

  const [selectedSubCategory, setSelectedSubCategory] = useState(decodedSubCategory);
  const [filteredImg, setFilteredImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16); 
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    setFooter(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (category) {
      if (subCategory) {
        filterBySubcategory(category, subCategory);
      } else {
        filterByCategory(category);
      }
    }
    setTimeout(() => setLoading(false), 500);
  }, [category, subCategory]);

  // Reset selectedSubCategory when category changes
  useEffect(() => {
    setSelectedSubCategory(decodedSubCategory);
  }, [category, subCategory]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSubCategory, category, subCategory]);

  // Update filtered images when products or category changes
  useEffect(() => {
    if (!decodedCategory) return;

    if (selectedSubCategory === "Select SubCategory") {
      setFilteredImg(products.filter((p) => p.category === decodedCategory));
    } else {
      setFilteredImg(
        products.filter(
          (p) => p.category === decodedCategory && p.subCategory === selectedSubCategory
        )
      );
    }
  }, [selectedSubCategory, products, category]);

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredImg.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredImg.length / productsPerPage);

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPopup = (product) => {
    setPopupProduct(product);
  };

  const handleClosePopup = () => {
    setPopupProduct(null);
  };

  const subCategoryList = subcategories[decodedCategory] ? [...subcategories[decodedCategory]] : [];

  // If category doesn't exist, show NotFoundPage
  if (!categories.includes(decodedCategory)) {
    return <NotFoundPage />;
  }

  // Pagination Controls Component
  const PaginationControls = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination-controls">
        <button 
          onClick={() => handlePageChange(1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          &laquo;
        </button>
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          &lsaquo;
        </button>
        
        {startPage > 1 && <span className="pagination-ellipsis">...</span>}
        
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`pagination-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        
        {endPage < totalPages && <span className="pagination-ellipsis">...</span>}
        
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          &rsaquo;
        </button>
        <button 
          onClick={() => handlePageChange(totalPages)} 
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          &raquo;
        </button>
      </div>
    );
  };

  return (
    <div className="mb-5" style={{ marginTop: "72px", padding: "3%", textAlign: "center" }}>
      <Row style={{ margin: "1% 6% 5% 6%" }}>
        <div className="ms-2 mt-5 mb-5" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="me-4 d-flex align-items-center">
            <span className="me-4">More:</span>
            <select 
              value={selectedSubCategory} 
              onChange={handleSubCategoryChange} 
              className="Category_Row" 
              style={{ color: theme === "darkTheme" ? "white" : "black" }}
            >
              <option value="Select SubCategory">All {category}</option>
              {subCategoryList.map((sub) => (
                <option key={sub} value={sub} className="Category">
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : currentProducts.length > 0 ? (
          <>
            {currentProducts.map((product) => (
              <Col style={{ padding: 6 }} lg={3} md={4} sm={12} xs={6} key={product.id}>
                <ProductCard 
                category={category}
                subCategory={selectedSubCategory}
                setIsCartOpen={setIsCartOpen} 
                img={product} 
                onOpenPopup={handleOpenPopup} />
              </Col>
            ))}
            
            {totalPages > 1 && (
              <div className="mt-5 d-flex justify-content-center">
                <PaginationControls />
              </div>
            )}
          </>
        ) : (
          <p>No products found for this category/subcategory.</p>
        )}
      </Row>
      {popupProduct && (
              <div className="modal-popup">
                <Popup 
                  setIsCartOpen={setIsCartOpen} 
                  img={[popupProduct]} 
                  id={popupProduct._id} 
                  togglePopup={handleClosePopup} 
                />
              </div>
            )}
    </div>
  );
};