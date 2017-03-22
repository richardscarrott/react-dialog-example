import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { fetchQuoteIfNeeded } from 'actions/quote/quote';
import Dialog from 'components/dialog/Dialog';
import styles from 'components/index/Index.css';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { open1: true, open2: true };
  }

  handleClick1() {
    this.setState({ open1: !this.state.open1 });
  }

  handleClick2() {
    this.setState({ open2: !this.state.open2 });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    Index.fetchData({ dispatch });
  }

  render() {
    const { isFetching, error, value } = this.props;
    return (
      <div className={styles.root}>
        <button onClick={this.handleClick1.bind(this)}>
          Toggle 1
        </button>
        <button onClick={this.handleClick2.bind(this)}>
          Toggle 2
        </button>
        {isFetching ? <p>Loading...</p> : null}
        {
          this.state.open1
            ? <Dialog
              name="open1"
              message="HEllo second dialog / modal."
              style={{ background: 'green', width: 300, height: 400 }}
            />
            : null
        }
        {this.state.open2 ? <Dialog name="open2" message={error} /> : null}
        {value ? <p>{value}</p> : null}
      </div>
    );
  }
}

Index.fetchData = function({ dispatch }) {
  return dispatch(fetchQuoteIfNeeded());
};

function mapStateToProps(state) {
  return { ...state.quote };
}

export default connect(mapStateToProps)(Index);
