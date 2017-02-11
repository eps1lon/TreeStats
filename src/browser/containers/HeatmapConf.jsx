import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form/immutable';

import LabeledInput from '../components/LabeledInput.jsx';

require('../style/data_filter.css');

/**
 *
 */
class HeatmapConf extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    return (
      <Form model="heatmap_conf">
        <LabeledInput>
          <label>blur</label>
          <Control
            type="number"
            model="heatmap_conf.blur"
            disabled={true} />
        </LabeledInput>

        <LabeledInput>
          <label>radius</label>
          <Control
            type="number"
            model="heatmap_conf.radius"
            disabled={true} />
        </LabeledInput>

        <LabeledInput>
          <label>min opacity</label>
          <Control
            type="number"
            model="heatmap_conf.min_opacity" />
        </LabeledInput>

        <LabeledInput>
          <label>max opacity</label>
          <Control
            type="number"
            model="heatmap_conf.max_opacity" />
        </LabeledInput>
      </Form>
    );
  }
};

export default connect()(HeatmapConf);
