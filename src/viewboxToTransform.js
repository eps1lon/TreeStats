import {zoomIdentity} from 'd3-zoom';

/**
 * doesnt quite work because svg viewbox centers
 * @param {number[]} viewbox [minx,miny,width,height]
 * @param {number} width
 * @param {number} height
 * @return {d3-transform}
 */
export default function viewboxToTransform(viewbox, width, height) {
    const k = Math.min(
        width / viewbox[2],
        height / viewbox[3],
    );

    return zoomIdentity
        .scale(k)
        .translate(-viewbox[0], -viewbox[1]);
};
