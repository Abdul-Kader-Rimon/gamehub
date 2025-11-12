import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div className='flex items-center justify-center mt-20 mx-auto z-50'>
        <HashLoader color="#ed219c" size={100}/>
      </div>
    );
};

export default Loader;