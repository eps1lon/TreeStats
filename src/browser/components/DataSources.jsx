import React from 'react';
import { Map } from 'immutable';

import LabeledInput from '../components/LabeledInput.jsx';
import { dataSourceHuman } from '../selectors/data';

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
    return dataSourceHuman(source);
  }

  /**
   * @return {JSX}
   */
  render() {
    const { onChange, sources } = this.props;
    return (
      <LabeledInput>
        <label>Source</label>
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
      </LabeledInput>
    );
  }
};

export default DataSources;
