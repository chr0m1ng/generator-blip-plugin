import React from 'react';
import PropTypes from 'prop-types';

const BlipBadgeComponent = ({
    value,
    color = 'warning',
    text_color = 'whisper',
    ...otherProps
}) => {
    return (
        <span
            {...otherProps}
            className={`badge bp-fs-7 ph1 br-100 bp-c-${text_color} bp-bg-${color}`}
        >
            {value}
        </span>
    );
};

BlipBadgeComponent.propTypes = {
    value: PropTypes.any.isRequired,
    color: PropTypes.string,
    text_color: PropTypes.string
};

export { BlipBadgeComponent };
