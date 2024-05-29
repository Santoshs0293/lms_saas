import React from 'react';

const Loader = (props) => {
    const { isLoading, children } = props
    return (
        isLoading ?
        <div className='loaderCont' ><div className="lds-facebook"><div></div><div></div><div></div></div></div>
        : children
    );
};

export default Loader;