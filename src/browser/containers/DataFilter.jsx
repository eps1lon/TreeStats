import React from 'react';
import {connect} from 'react-redux';
import {Control, Form} from 'react-redux-form/immutable';

import LabeledInput from '../components/LabeledInput.jsx';
import OptionsMap from '../components/OptionsMap.jsx';
import {SELECT_ANY} from '../actions/rows';

require('../style/data_filter.css');

/**
 *
 */
class DataFilter extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const {classes, leagues} = this.props;

    // disabling inputs/fieldset is a bad idea
    // because you will loose focus
    return (
      <Form model="data_filter">
        <LabeledInput>
          <label>league</label>
          <OptionsMap
            options={leagues}
            model="data_filter.league"
            name_key="name" />
        </LabeledInput>

        <LabeledInput>
          <label>class</label>
          <OptionsMap
            options={classes}
            model="data_filter.klass"
            name_key="name" />
        </LabeledInput>

        <LabeledInput>
          <label>active since</label>
          <Control
            type="date"
            model="data_filter.last_active" />
        </LabeledInput>

        <LabeledInput>
          <label>limit</label>
          <Control
            type="number"
            model="data_filter.limit" />
        </LabeledInput>

        <LabeledInput>
          <label>offset</label>
          <Control
            type="number"
            model="data_filter.offset" />
        </LabeledInput>
      </Form>
    );
  }
};

/**
 * only display active leagues
 * @param {Map} leagues
 * @return {Map}
 */
const visibleLeagues = (leagues) => {
  return new Map([...leagues.entries()].filter((entry) => entry[1].active));
};

/**
 * boilerplate, display all classes
 * @param {Map} classes
 * @return {Map}
 */
const visibleClasses = (classes) => {
  return classes;
};

/**
 * @param {Map} map for {OptionsMap}
 * @param {string} name_key key for options content
 * @return {Map} a map for {OptionsMap}
 */
const addAnyEntry = (map, name_key = 'name') => {
  if (map.has(SELECT_ANY)) console.warn('map already as anyEntry');

  return new Map([[SELECT_ANY, {[name_key]: 'all'}], ...map]);
};

const mapStateToProps = (state) => {
  return {
    classes: addAnyEntry(visibleClasses(state.get('poe').get('classes'))),
    leagues: addAnyEntry(visibleLeagues(state.get('poe').get('leagues'))),
  };
};

export default connect(
  mapStateToProps,
)(DataFilter);
