import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddItem.propTypes = {
    onSubmit: PropTypes.func
};
AddItem.defaultProps = {
    onSubmit: null
}

function AddItem(props) {
    const [value, setValue] = useState('');
    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(value);
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Add a new Item" value={value} onChange={handleChange} />
        </form>
    );
}

export default AddItem;