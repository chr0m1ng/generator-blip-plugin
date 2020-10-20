import React from 'react';
import PropTypes from 'prop-types';

const BlipDropdownButtonComponent = ({
    button_class,
    dropdown_class,
    label,
    children,
    arrow_side,
    show_dropdown,
    toggleDropdown,
    footer
}) => {
    return (
        <div className="BlipDropdownButton relative">
            <button
                className={`bp-btn ${button_class}`}
                onClick={toggleDropdown}
            >
                {label}
            </button>
            {show_dropdown && (
                <>
                    <div className="overlay z-1" onClick={toggleDropdown}></div>
                    <div
                        className={`bp-card bp-card--${arrow_side}-arrow pa0 z-2 absolute ${dropdown_class}`}
                    >
                        <div className="pa3">{children}</div>
                        {footer.length > 0 && (
                            <>
                                <div className="bp-divider-h" />
                                <div
                                    className="pa2 flex flex-row-reverse"
                                    onClick={toggleDropdown}
                                >
                                    {footer}
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

BlipDropdownButtonComponent.propTypes = {
    button_class: PropTypes.string,
    dropdown_class: PropTypes.string,
    label: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    arrow_side: PropTypes.string.isRequired,
    show_dropdown: PropTypes.bool.isRequired,
    toggleDropdown: PropTypes.func.isRequired,
    footer: PropTypes.arrayOf(PropTypes.node).isRequired
};

export { BlipDropdownButtonComponent };
