import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BlipDropdownButtonComponent } from './BlipDropdownButtonComponent';

const BlipDropdownButtonContainer = ({
    button_class,
    dropdown_class,
    label,
    children,
    onOpenDropdown,
    onCloseDropdown,
    arrow_side = 'left',
    footer = []
}) => {
    const [show_dropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        if (show_dropdown) {
            onCloseDropdown !== undefined && onCloseDropdown();
        } else {
            onOpenDropdown !== undefined && onOpenDropdown();
        }
        setShowDropdown(!show_dropdown);
    };

    return (
        <BlipDropdownButtonComponent
            button_class={button_class}
            dropdown_class={dropdown_class}
            label={label}
            arrow_side={arrow_side}
            show_dropdown={show_dropdown}
            toggleDropdown={toggleDropdown}
            footer={footer}
        >
            {children}
        </BlipDropdownButtonComponent>
    );
};

BlipDropdownButtonContainer.propTypes = {
    button_class: PropTypes.string,
    dropdown_class: PropTypes.string,
    label: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    onOpenDropdown: PropTypes.func,
    onCloseDropdown: PropTypes.func,
    arrow_side: PropTypes.string,
    footer: PropTypes.arrayOf(PropTypes.node)
};

export { BlipDropdownButtonContainer };
