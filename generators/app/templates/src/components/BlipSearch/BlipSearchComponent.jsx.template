import React from 'react';
import PropTypes from 'prop-types';
import * as lodashDebounce from 'lodash.debounce';

import { BlipIcon } from 'components/BlipIcon';

const BlipSearchComponent = ({
    onChange,
    should_show_input,
    showInput,
    hideInput,
    input_ref,
    debounce
}) => {
    const debouncedChange = lodashDebounce(
        (e) => onChange(e.target.value),
        debounce
    );
    const persistedDebounceChange = (e) => {
        e.persist();
        return debouncedChange(e);
    };

    return (
        <div className="BlipSearch  flex">
            <button
                className="bp-btn  bp-btn--text-only bp-fs-3"
                onClick={showInput}
            >
                <BlipIcon name="search" color="rooftop" />
            </button>
            <input
                className={`${should_show_input ? 'show' : ''}`}
                type="text"
                onChange={persistedDebounceChange}
                onBlur={hideInput}
                ref={input_ref}
            />
        </div>
    );
};

BlipSearchComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
    should_show_input: PropTypes.bool.isRequired,
    showInput: PropTypes.func.isRequired,
    hideInput: PropTypes.func.isRequired,
    input_ref: PropTypes.object.isRequired,
    debounce: PropTypes.number.isRequired
};

export { BlipSearchComponent };
