import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { fetchQuoteIfNeeded } from 'actions/quote/quote';
import Dialog from 'components/dialog/Dialog';
import styles from 'components/index/Index.css';

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    Index.fetchData({ dispatch });
  }

  render() {
    const { isFetching, error, value } = this.props;
    return (
      <div className={styles.root} onClick={this.handleClick.bind(this)}>
        {isFetching ? <p>Loading...</p> : null}
        {this.state.open ? <Gateway into="dialog">
              <Dialog message={error} />
            </Gateway> : null}
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
