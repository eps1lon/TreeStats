import React from 'react';
import ReactDOM from 'react-dom';

import Heatmap from 'heatmap.js';

import objectsEqual from '../../objectsEqual';
import browserTransform from '../../d3-transform-browser';
import HeatmapLegend from './HeatmapLegend.jsx';

/**
 * react wrapper for heatmap.js
 */
class ReactHeatmap extends React.Component {
    static propTypes = {
        conf: React.PropTypes.object.isRequired,
        data: React.PropTypes.object.isRequired,
    };

    state = {
        legend_data: {
            min: 0,
            max: 0,
            gradient: {},
        },
    };

    /**
     * init the heatmap because the create method needs an existing container
     */
    componentDidMount() {
        const {conf, data} = this.props;
        this.heatmap = Heatmap.create({
            ...conf,
            container: ReactDOM.findDOMNode(this),
            onExtremaChange: this.onExtremaChange.bind(this),
        });

        this.setData(data);
    }

    /**
     * callback for heatmap instance
     * @param {Object} legend_data
     */
    onExtremaChange(legend_data) {
        this.setState({
            ...this.state,
            legend_data,
        });
    }

    /**
     * updates the heatmap instance with the new props
     * TODO the setter methods ignore the new dimensions
     * @param {Object} new_props
     */
    componentWillReceiveProps(new_props) {
        const {conf, data, zoom} = new_props;

        this.setConf(conf);
        this.setData(data);
        this.setZoom(zoom);
    }

    /**
     * @param {Object} new_conf
     */
    setConf(new_conf) {
        if (this.shouldConfUpdate(new_conf)) {
            // FIXME https://github.com/pa7/heatmap.js/issues/209
            // min and maxOpacity work
            this.heatmap.configure(new_conf);
        }
    }

    /**
     * @param {Object} data
     */
    setData(data) {
        if (this.shouldDataUpdate(data)) {
            this.heatmap.setData(data);
        }
    }

    setZoom(zoom) {
        if (this.shouldZoomUpdate(zoom)) {
            const canvas = ReactDOM.findDOMNode(this).querySelector('.heatmap-canvas');
            canvas.style.transform = browserTransform(zoom);
        }
    }

    shouldZoomUpdate(new_zoom) {
        return true;
    }


    /**
     * @param {Object} new_conf
     * @return {boolean}
     */
    shouldConfUpdate(new_conf) {
        return !objectsEqual(this.props.conf, new_conf);
    }

    /**
     * @param {Object} new_data
     * @return {boolean}
     */
    shouldDataUpdate(new_data) {
        const old_data = this.props.data;

        return old_data.hash != new_data.hash;
    }

    /**
     * @return {JSX}
     */
    render() {
        const {legend_data} = this.state;

        return (
             <div
                className="heatmap"
                style={{width: '100%', height: '100%'}}>
                <HeatmapLegend data={legend_data} />
            </div>
        );
    }
};

export default ReactHeatmap;
