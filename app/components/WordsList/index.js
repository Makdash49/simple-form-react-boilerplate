import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';

function WordsList({ loading, error, wordsArray }) {

  if (wordsArray !== false) {
    return <List items={wordsArray} component={ListItem} />;
  } else {
    return (
      <div></div>
    )
  }

  return null;
}

WordsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  wordsArray: PropTypes.any,
};

export default WordsList;
