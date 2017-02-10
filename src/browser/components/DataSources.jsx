import React from 'react';
import DataSource from '../components/DataSource.jsx';

/**
 * a container for data sources
 */
class DataSources extends React.Component {
  static propTypes = {
    sources: React.PropTypes.instanceOf(Map).isRequired,
    onChange: React.PropTypes.func.isRequired,
  }
  /**
   * @return {JSX}
   */
  render() {
    const {onChange, sources} = this.props;
    return (
      <select className='data-sources' onChange={onChange}>
        {[...sources.entries()].map((entry) => {
          const [key, source] = entry;
          return <DataSource key={key} source={source} />;
        })}
      </select>
    );
  }
};

export default DataSources;
