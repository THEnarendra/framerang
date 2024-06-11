import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  padding: 20px;
`;

const PolicyPage = () => {
  return (
    <PageContainer style={{margin:"10%"}}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          aliquet orci, et rhoncus sapien consectetur vitae. Donec rutrum
          malesuada ipsum, sed ultricies metus lacinia nec. Cras varius lorem
          vitae pulvinar congue. Nulla sed eros est. Proin nec arcu nec arcu
          dapibus eleifend. Sed nec mi a elit sodales tristique. Integer nec
          nisl eget urna tempor tincidunt vel at ligula. Nulla facilisi.
        </p>
        <p>
          Vivamus ac dolor nec metus fermentum lobortis. Curabitur vitae
          tincidunt arcu. Fusce nec neque nec magna tincidunt rhoncus.
          Curabitur interdum euismod libero, ac tincidunt sapien vestibulum
          vitae. Ut vel tincidunt est. Sed nec augue vitae nisi gravida
          tristique. Quisque in nisl fermentum, condimentum neque ac, gravida
          libero. Aenean ac enim semper, convallis tortor sed, eleifend urna.
        </p>
        {/* More privacy policy content */}
      </motion.div>
    </PageContainer>
  );
};

export default PolicyPage;
