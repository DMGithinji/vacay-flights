import React from 'react';
// import loading from '../../assets/images/loading.gif';
import plane from '../../assets/images/plane-loader.gif';

const Loader = () => {
    return (
        <div className="app-loader">
            <h1 className="text-center pt-4 mb-4">Please Wait As We Get Your Flight Details</h1>
            <div class="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className = "d-flex justify-content-center mt-3" >
                <img src={plane}  width = "450px" alt="loading..." />
            </div>
        </div>
    );
};

export default Loader;