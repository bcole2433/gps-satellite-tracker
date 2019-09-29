import React from 'react';
import loadingGif from '../../images/loading.gif';

const Loading = () => {
    return (
        <div className="loading">
        <img src={loadingGif} alt="" />
        <p>Updating Satellite Data</p>
        </div>
    )
}

export default Loading;