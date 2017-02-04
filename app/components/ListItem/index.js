import React from 'react';

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
