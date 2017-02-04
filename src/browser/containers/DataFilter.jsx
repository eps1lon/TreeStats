import React from 'react';
import {connect} from 'react-redux';
import {Control, Form} from 'react-redux-form';

const POE = require('../../poe/data');
import LabeledInput from '../components/LabeledInput.jsx';
import OptionsMap from '../components/OptionsMap.jsx';
import {SELECT_ANY} from '../actions/rows';

require('../style/data_filter.css');

/**
 * TODO extract leagues, classes to props
 */
class DataFilter extends React.Component {
    /**
     * @return {JSX}
     */
    render() {
        const name_key = 'name';
        const any_entry = new Map([[SELECT_ANY, {[name_key]: 'all'}]]);

        const leagues = new Map([...any_entry, ...POE.leagues]);
        const classes = new Map([...any_entry, ...POE.classes]);

        // disabling inputs/fieldset is a bad idea
        // because you will loose focus
        return (
            <Form model="data_filter">
                <OptionsMap
                    options={leagues}
                    label="leagues"
                    model="data_filter.league"
                    name_key="name" />

                <OptionsMap
                    options={classes}
                    label="classes"
                    model="data_filter.klass"
                    name_key="name" />

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

export default connect()(DataFilter);
