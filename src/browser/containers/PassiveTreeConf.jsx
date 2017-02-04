import React from 'react';
import {connect} from 'react-redux';
import {Control, Form} from 'react-redux-form';

import LabeledInput from '../components/LabeledInput.jsx';

/**
 *
 */
class PassiveTreeConf extends React.Component {
    /**
     * @return {JSX}
     */
    render() {
        return (
            <Form model="passive_tree_conf">
                <LabeledInput>
                    <label>node scale</label>
                    <Control
                        type="number"
                        min="1"
                        step="0.1"
                        model="passive_tree_conf.node_scale" />
                </LabeledInput>

                <LabeledInput>
                    <label>Ascendancy?</label>
                    <Control.checkbox model="passive_tree_conf.ascendancy" />
                </LabeledInput>

                <button>Submit!</button>
            </Form>
        );
    }
};

export default connect()(PassiveTreeConf);
