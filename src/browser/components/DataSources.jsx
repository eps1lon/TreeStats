import React from 'react';
import {Map} from 'immutable';

import CsvDataSource from '../../data_sources/CsvDataSource';

/**
 * a container for data sources
 */
class DataSources extends React.Component {
  static propTypes = {
    active: React.PropTypes.string,
    sources: React.PropTypes.instanceOf(Map).isRequired,
    onChange: React.PropTypes.func,
  }

  /**
   * factory method to create a meaningful option value
   * @param {AbstractDataSource} source
   * @return {string}
   */
  optionValue(source) {
    if (source instanceof CsvDataSource) {
      return source.filename;
    }

    return source.toString();
  }

  /**
   * @return {JSX}
   */
  render() {
    const {onChange, sources} = this.props;
    return (
      <select className='data-sources' onChange={onChange}>
        {sources.entrySeq().map((entry) => {
          const [key, source] = entry;
          return (
            <option key={key} value={key}>
              {this.optionValue(source)}
            </option>
          );
        })}
      </select>
    );
  }
};

export default DataSources;
