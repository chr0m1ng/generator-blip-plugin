import React from 'react';
import PropTypes from 'prop-types';

import icons from './defs.svg';

const BlipIconComponent = ({
    name,
    color = 'blip-light',
    class_name,
    solid
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={class_name}
            width="1em"
            height="1em"
        >
            <use
                xlinkHref={`${icons}#${name}${solid ? '-solid' : '-outline'}`}
                className={`bp-icon--${color}`}
            />
        </svg>
    );
};

BlipIconComponent.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    class_name: PropTypes.string,
    solid: PropTypes.bool
};

export { BlipIconComponent };
