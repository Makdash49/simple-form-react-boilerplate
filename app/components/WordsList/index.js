import React, { PropTypes } from 'react';
import List from 'components/List';
import ListItem from 'components/ListItem';

function WordsList({words}) {

  if (words !== false) {
    return <List items={words} />;
  }
  return null;
}

WordsList.propTypes = {
  words: PropTypes.any
};

export default WordsList;
