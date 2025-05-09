// utils/categoryImages.js
const categoryImageMap = {
    'Frames': 'https://res.cloudinary.com/dvqbujync/image/upload/v1744536114/ry7n17gojse9dylenprw.jpg',
    'Photo Frames': 'https://res.cloudinary.com/dvqbujync/image/upload/v1741599755/zgf7urfhhpoqzcujceql.jpg',
    'Posters': 'https://res.cloudinary.com/dvqbujync/image/upload/v1741607471/uje0xobo7xeunqxya2wm.jpg',
    'Custom Frames': 'https://res.cloudinary.com/dvqbujync/image/upload/v1744875054/qpidrhmdtlsa4j5v9d7s.jpg'
    // Add all your categories here
  };
  
  export const getCategoryImage = (categoryName) => {
    return categoryImageMap[categoryName] || 'https://res.cloudinary.com/your-account/image/upload/v1/default-category.jpg';
  };