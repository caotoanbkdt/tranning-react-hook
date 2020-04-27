import React from 'react';


function todoListItem(props) {
    const { item, onToDeleteItem } = props;
    return (
        <li onClick={onToDeleteItem}>{item}</li>
    );
}

export default todoListItem;