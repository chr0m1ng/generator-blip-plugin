import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { BlipSearchComponent } from './BlipSearchComponent';

const BlipSearchContainer = ({ onChange, debounce }) => {
    const [should_show_input, setShouldShowInput] = useState(false);
    const showInput = () => {
        setShouldShowInput(true);
        input_ref.current.focus();
    };
    const hideInput = () => setShouldShowInput(false);
    const input_ref = useRef(undefined);
    return (
        <BlipSearchComponent
            onChange={onChange}
            should_show_input={should_show_input}
            showInput={showInput}
            hideInput={hideInput}
            inputRef={input_ref}
            debounce={debounce || 0}
        />
    );
};

BlipSearchContainer.propTypes = {
    onChange: PropTypes.func.isRequired,
    debounce: PropTypes.number
};

export { BlipSearchContainer };
