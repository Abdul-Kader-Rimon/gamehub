import React, { use  } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    

    if (loading) {
      return (
        <div className="h-[97vh] flex items-center justify-center">
          <HashLoader color="#f22693" />
        </div>
      );
    }

    if (!user) {
      return <Navigate to="/signin" state={{from: location}} replace />;
    }

    return children;
};

export default PrivetRoute;