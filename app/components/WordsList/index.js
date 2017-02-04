// import React, { PropTypes } from 'react';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
//
// function WordsList({words}) {
//
//   const ErrorComponent = () => (
//     <ListItem item={'Something went wrong, please try again!'} />
//   );
//   return <List component={ErrorComponent} />;
//
//   WordsList.propTypes = {
//     words: PropTypes.any
//   };
//
// }
//
// export default WordsList;
//
//


import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
// import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';

function WordsList({ loading, error, wordsArray }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }

    // const ErrorComponent = () => (
    //   <ListItem item={'Something went wrong, please try again!'} />
    // );
    // return <List component={ErrorComponent} />;

  // if (wordsArray !== false) {
    return <List items={wordsArray} />;
  // }

  // return null;
}

WordsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  wordsArray: PropTypes.any,
};

export default WordsList;
