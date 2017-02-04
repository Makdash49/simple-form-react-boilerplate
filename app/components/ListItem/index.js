import React from 'react';

// import Item from './Item';
// import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <div>
      {props.item}
    </div>

  );
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
