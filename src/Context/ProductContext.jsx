import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    console.log("Fetching products...");
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://framerang-backend.vercel.app/api/v1/allProducts`,
      );
      const response=res.data;
      if (res.status === 201 && response.data.length > 0) {
        const allProducts = response.data;

        setProducts(allProducts);
        setFilteredProducts(allProducts);
        processCategories(allProducts);
      } else {
        console.warn("No products found or empty response");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error.response) {
        console.error("Response Status:", error.response.status);
        console.error("Response Data:", error.response.data);
      }
    }
  };

  const processCategories = (products) => {
    const categorySet = new Set();
    const subcategoryMap = {};

    products.forEach(({ category, subCategory }) => {
      if (category) {
        categorySet.add(category);
        if (subCategory) {
          if (!subcategoryMap[category]) {
            subcategoryMap[category] = new Set();
          }
          subcategoryMap[category].add(subCategory);
        }
      }
    });

    setCategories([...categorySet]);
    setSubcategories(
      Object.fromEntries(
        Object.entries(subcategoryMap).map(([key, value]) => [key, [...value]])
      )
    );
  };

  const filterByCategory = (category) => {
    console.log("Filtering by category:", category);
    setFilteredProducts(
      category ? products.filter((p) => p.category === category) : products
    );
  };

  const filterBySubcategory = (category, subCategory) => {
    if (!category) return filterByCategory(null);
    setFilteredProducts(
      subCategory
        ? products.filter((p) => p.category === category && p.subCategory === subCategory)
        : products.filter((p) => p.category === category)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        subcategories,
        filteredProducts,
        filterByCategory,
        filterBySubcategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
