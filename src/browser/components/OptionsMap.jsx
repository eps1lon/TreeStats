import React from 'react';
import {Control} from 'react-redux-form/immutable';

/**
 * creates a {Control.select} from the given map
 */
class OptionsMap extends React.Component {
    static propTypes = {
        options: React.PropTypes.instanceOf(Map).isRequired,
        name_key: React.PropTypes.any.isRequired,
        model: React.PropTypes.string.isRequired,
    }

    /**
     * @return {JSX}
     */
    render() {
        const {options, name_key, model} = this.props;

        return (
            <Control.select model={model}>
                {[...options.entries()].map((entry) => {
                    const [id, props] = entry;

                    return (
                        <option key={id} value={id}>
                            {props[name_key]}
                        </option>
                    );
                })}
            </Control.select>
        );
    }
};

export default OptionsMap;
