import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form/immutable';

import LabeledInput from '../components/LabeledInput.jsx';
import OptionsMap from '../components/OptionsMap.jsx';
import { SELECT_ANY } from '../actions/rows';
import { visibleLeagues } from '../selectors/poe';

export const duration_units = new Map([
  [1, { human: 'seconds' }],
  [60, { human: 'minutes' }],
  [60*60, { human: 'hours' }],
  [60*60*24, { human: 'days' }],
  [60*60*24*7, { human: 'weeks' }],
]);

/**
 *
 */
class DataFilter extends React.Component {
  static propTypes = {
    classes: React.PropTypes.instanceOf(Map),
    leagues: React.PropTypes.instanceOf(Map),
    handleChange: React.PropTypes.func,
  }

  /**
   * rrf onChange handle
   * @param {object} values
   */
  handleChange(values) {
    if (this.props.handleChange) {
      this.props.handleChange(values, this.props.classes, this.props.leagues);
    }
  }

  /**
   * @return {JSX}
   */
  render() {
    const { classes, leagues } = this.props;
    const handleChange = this.handleChange.bind(this);

    // disabling inputs/fieldset is a bad idea
    // because you will loose focus
    return (
      <Form model="data_filter" onChange={handleChange}>
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
          <label>last active</label>
          <Control
            type="number"
            model="data_filter.last_active" />
        </LabeledInput>

        <OptionsMap
          options={duration_units}
          model="data_filter.last_active_base"
          name_key="human" />

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

  return new Map([[SELECT_ANY, { [name_key]: 'all' }], ...map]);
};

const mapStateToProps = (state) => {
  return {
    classes: addAnyEntry(visibleClasses(state.getIn(['poe', 'classes']))),
    leagues: addAnyEntry(visibleLeagues(state)),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DataFilter);
