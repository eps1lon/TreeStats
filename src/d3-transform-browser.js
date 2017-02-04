/**
 * supports zoom transformation for html elements
 *
 * @param {d3-transform} transform
 * @return {string} the div style attr for transform
 */
function browserTransform(transform) {
    const translation = `translate(${transform.x/transform.k|0}px, ${transform.y/transform.k|0}px)`;
    const scale = `scale(${transform.k})`;

    return [translation, scale].join(' ');
};

export default browserTransform;
