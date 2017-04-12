import React from 'react';
import ReactDOM from 'react-dom';

import Heatmap from 'heatmap.js';
import objectsEqual from '../../objectsEqual';

import Transform from '../../Transform';

/**
 * react wrapper for heatmap.js
 */
class ReactHeatmap extends React.Component {
	static propTypes = {
		conf: React.PropTypes.object.isRequired,
		data: React.PropTypes.object.isRequired,
	};

	/**
	 * init the heatmap because the create method needs an existing container
	 */
	componentDidMount() {
		const { conf, data } = this.props;
		this.heatmap = Heatmap.create({
			...conf,
			container: ReactDOM.findDOMNode(this),
		});

		this.setData(data);
	}

	/**
	 * updates the heatmap instance with the new props
	 * TODO the setter methods ignore the new dimensions
	 * @param {Object} new_props
	 */
	componentWillReceiveProps(new_props) {
		const { conf, data } = new_props;

		this.setConf(conf);
		this.setData(data);
	}

	/**
	 *
	 * @param {Object} new_props
	 * @return {boolean} true to invoke #render()
	 */
	shouldComponentUpdate(new_props) {
		return this.shouldConfUpdate(new_props.conf)
			|| this.shouldDataUpdate(new_props.data);
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
			const bbox = ReactDOM.findDOMNode(this).getBoundingClientRect();
			const { width, height } = bbox;
			const { viewbox } = this.props;
			const scaled_data
				= this.transformData(
					data.data,
					Transform.viewboxToTransform(viewbox, width, height),
				);

			this.heatmap.setData({
				max: data.max,
				data: scaled_data.toArray(),
			});
		}
	}

	/**
	 * applies a given coordination transformation to the data
	 * @param {List} data
	 * @param {Transform} transform
	 * @return {Object[]}
	 */
	transformData(data, transform) {
		return data.map((datum) => {
			return {
				...datum,
				x: transform.applyX(datum.x) | 0,
				y: transform.applyY(datum.y) | 0,
			};
		});
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
		return (
			<div
				className="heatmap"
				style={{ width: '100%', height: '100%' }}>
			</div>
		);
	}
};

export default ReactHeatmap;
