import React from 'react';

import sadIcon from './sad-face-2691.svg';

const ErrorIndicator = () => {
    return (
        <div>
            <img src={sadIcon}
                 alt='sad face'/>
            <span>Some Error</span>
        </div>
    );
};

export default ErrorIndicator;