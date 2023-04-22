
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{  listStyle: 'disc',
        backgroundColor: isSelected ? 'green' : 'red',
        padding: '5px 20px',
        borderRadius: '5px',
        margin: '5px 0',
        display: 'block',
        maxWidth: '100px',}}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};


WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
items,
}) => {
  const [ selectedIndex,setSelectedIndex] = useState();

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };
  const propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
      })
    ),
  };

  PropTypes.checkPropTypes(propTypes, { items }, 'prop', 'WrappedListComponent');
  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex===index}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;

