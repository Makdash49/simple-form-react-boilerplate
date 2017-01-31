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

import Form from './Form';
import Input from './Input';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';




export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <Form onSubmit={this.props.onSubmitForm}>
          <Input
            id="username"
            type="text"
            placeholder="Enter a word here."
          />
        </Form>

      </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log("You submitted a form!!!!");
      // dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
});



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
