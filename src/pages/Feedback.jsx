import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/Header';

class Feedback extends Component {
  FeedbackMSG = () => {
    const number = 3;
    const { acertos } = this.props;
    if (acertos < number) {
      return 'Could be better...';
    } if (acertos >= number) {
      return 'Well Done!';
    }
  };

  render() {
    const { acertos, score } = this.props;
    return (
      <section>
        <Header />
        <h1>Feedback!</h1>
        <span data-testid="feedback-text">{this.FeedbackMSG()}</span>
        <span data-testid="feedback-total-score">{score}</span>
        <span data-testid="feedback-total-question">{acertos}</span>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  acertos: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  acertos: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
