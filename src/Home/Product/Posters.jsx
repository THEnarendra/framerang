import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useProducts } from '../../Context/ProductContext';
import Loader from '../Loader'; // ✅ Import your custom Loader component

export const Posters = ({ setFooter, theme, setIsCartOpen }) => {
  const { category, subCategory } = useParams();
   
  const { products, subcategories, filterByCategory, filterBySubcategory } = useProducts();

  const [selectedSubCategory, setSelectedSubCategory] = useState(subCategory || 'Select SubCategory');
  const [filteredImg, setFilteredImg] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    setFooter(true);
  }, []);

  useEffect(() => {
    setLoading(true); // ✅ Start loading before fetching
    if (category) {
      if (subCategory) {
        filterBySubcategory(category, subCategory);
      } else if (filteredImg.length === 0) {
        filterByCategory(category);
      }
    }
    setTimeout(() => setLoading(false), 500); // ✅ Simulating fetch delay
  }, [category, subCategory]);

  useEffect(() => {
    if (selectedSubCategory === 'Select SubCategory') {
      setFilteredImg(products.filter(p => p.category === category));
    } else {
      setFilteredImg(products.filter(p => p.category === category && p.subCategory === selectedSubCategory));
    }
  }, [selectedSubCategory, products, category]);

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  // Convert subcategories to an array safely
  const subCategoryList = subcategories[category] ? [...subcategories[category]] : [];

  return (
    <div className='mb-5' style={{ marginTop: "72px", padding: "3%", textAlign: "center" }}>
      <Row style={{ margin: "1% 6% 5% 6%" }}>
        <div className='ms-2 mt-5 mb-5' style={{ display: "flex", flexWrap: "wrap" }}>
          <div className='me-4 d-flex align-items-center'>
            <span className='me-4'>Filter:</span>
            <select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              style={{ color: theme === "darkTheme" ? "white" : "black" }}
              className='Category_Row'
              disabled={subCategoryList.length === 0}
            >
              <option value="Select SubCategory">Select SubCategory</option>
              {subCategoryList.map((sub) => (
                <option
                  key={sub}
                  value={sub}
                  style={{ backgroundColor: theme === "darkTheme" ? "black" : "white" }}
                  className='Category'
                >
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ✅ Use Custom Loader Component */}
        {loading ? (
          <Loader />
        ) : filteredImg.length > 0 ? (
          filteredImg.map((product) => (
            <Col style={{ padding: 6 }} lg={3} md={4} sm={12} key={product.id}>
              <ProductCard setIsCartOpen={setIsCartOpen} img={product} />
            </Col>
          ))
        ) : (
          <p>No products found for this category/subcategory.</p>
        )}
      </Row>
    </div>
  );
};
