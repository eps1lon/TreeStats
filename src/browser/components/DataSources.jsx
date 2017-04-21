import React from 'react';
import { Map } from 'immutable';
import path from 'path';

import POE from '../../poe/data';
import CsvDataSource from '../../data_sources/CsvDataSource';
import { fileProps } from '../../../task/lib/treesToCsvFile';

import LabeledInput from '../components/LabeledInput.jsx';

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
      const filename = path.basename(source.filename);
      const file_props = fileProps(filename);

      if (file_props !== undefined) {
        const date = new Date(file_props.ctime);
        const tree = POE.trees.get(file_props.tree_ident);

        if (date && tree) {
          return [
            date.toLocaleDateString(),
            tree.name,
          ].join(' - ');
        }
      }

      return filename;
    }

    return source.toString();
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
