import React from 'react';

import AbstractDataSource from '../../data_sources/AbstractDataSource';

/**
 * view for a {AbstractDataSource}
 */
class DataSource extends React.Component {
  static propTypes = {
    source: React.PropTypes.instanceOf(AbstractDataSource).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const {source} = this.props;

    return <p>{source.toString()}</p>;
  }
};

export default DataSource;
