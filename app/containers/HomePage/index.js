/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeWord } from './actions';
import { makeSelectWord } from './selectors';
import { makeSelectAllWords} from 'containers/App/selectors';

import { saveWord } from '../App/actions';
import WordsList from 'components/WordsList';



export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    var wordsArray;
    if (this.props.allWords._tail){
      var wordsArray = this.props.allWords._tail.array
    }

    const { loading, error } = this.props;

    const wordsListProps = {
      wordsArray,
    };

    return (
      <CenteredSection>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <Form onSubmit={this.props.onSubmitForm}>
          <Input
            id="username"
            type="text"
            placeholder="Enter words here."
            value={this.props.word}
            onChange={this.props.onChangeWord}
          />
        </Form>
        <WordsList {...wordsListProps} />
      </CenteredSection>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  var currentWord;
  return {
    onChangeWord: (evt) => {dispatch(changeWord(evt.target.value));
      currentWord = evt.target.value;
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveWord(currentWord));
      dispatch(changeWord(""));
      currentWord = "";
    },
  };
}

const mapStateToProps = createStructuredSelector({
  word: makeSelectWord(),
  allWords: makeSelectAllWords(),
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
