import React from 'react';

import objectsEqual from '../../objectsEqual';

/**
 * a legend for react-heatmap
 */
class HeatmapLegend extends React.Component {
    static propTypes = {
        data: React.PropTypes.shape({
            min: React.PropTypes.number.isRequired,
            max: React.PropTypes.number.isRequired,
            gradient: React.PropTypes.object.isRequired,
        }).isRequired,
    };

    /**
     * renders the legendGradient
     */
    renderLegendGradient() {
        const gradient_conf = this.props.data.gradient;
        const ctx = this.refs.canvas.getContext('2d');

        console.log(this.props, gradient_conf);

        const gradient = ctx.createLinearGradient(0, 0, 100, 1);
        for (const [offset, color] of Object.entries(gradient_conf)) {
            gradient.addColorStop(offset, color);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 100, 10);
    }

    /**
     * render the legend gradient
     */
    componentDidMount() {
        this.renderLegendGradient();
    }

    /**
     * checks if we should render the legendGradient
     * @param {Object} old_props
     */
    componentDidUpdate(old_props) {
        if (this.shouldLegendGradientUpdate(old_props)) {
            this.renderLegendGradient();
        }
    }

    /**
     * @param {Object} new_props
     * @return {boolean}
     */
    shouldComponentUpdate(new_props) {
        return !objectsEqual(this.props, new_props);
    }

    /**
     * @param {object} other_props
     * @return {boolean} true if we should call renderLegendGradient
     */
    shouldLegendGradientUpdate(other_props) {
        return !objectsEqual(
            this.props.data.gradient,
            other_props.data.gradient
        );
    }

    /**
     * @return {JSX}
     */
    render() {
        const {min, max} = this.props.data;
        return (
            <div className="heatmap-legend">
                <em className="heatmap-min">{min}</em>
                <em className="heatmap-max">{max}</em>
                <canvas ref="canvas" width="100" height="10" />
            </div>
        );
    }
};

export default HeatmapLegend;
