/**
 * very simple coordinate transformation
 * main point is to be able to scale x,y differently
 */
class Transform {
  k_x = 1;
  k_y = 1;
  t_x = 0;
  t_y = 0;

  /**
   * @param {number} t_x x translation
   * @param {number} t_y y translation
   * @param {number} k_x x scale (applies to y if y is undefined)
   * @param {number} k_y y scale
   */
  constructor(t_x = 0, t_y = 0, k_x = 1, k_y) {
    this.translate(t_x, t_y);
    this.scale(k_x, k_y);
  }

  /**
   * applies the transformation to a x coordinate
   * @param {number} x
   * @return {number} x in transformated coordinates
   */
  applyX(x) {
    return (x + this.t_x) * this.k_x;
  }

  /**
   * applies the transformation to a y coordinate
   * @param {number} y
   * @return {number} y in transformated coordinates
   */
  applyY(y) {
    return (y + this.t_y) * this.k_y;
  }

  /**
   * @param {number} k_x new x scale
   * @return {this}
   */
  scaleX(k_x) {
    this.k_x = k_x;
    return this;
  }

  /**
   * @param {number} k_y new y scale
   * @return {this}
   */
  scaleY(k_y) {
    this.k_y = k_y;
    return this;
  }

  /**
   * @param {number} k new scale (applies to both if k_y undefined else k_x)
   * @param {number} k_y new y sclae
   * @return {this}
   */
  scale(k, k_y) {
    if (k_y === undefined) {
      this.scaleX(k);
      this.scaleY(k);
    } else {
      this.scaleX(k);
      this.scaleY(k_y);
    }

    return this;
  }

  /**
   * @param {number} t_x new x translation
   * @return {this}
   */
  translateX(t_x) {
    this.t_x = t_x;
    return this;
  }

  /**
   * @param {number} t_y new y translation
   * @return {this}
   */
  translateY(t_y) {
    this.t_y = t_y;
    return this;
  }

  /**
   * @param {number} t_x new x translation, default = 0
   * @param {number} t_y new y translation, default = 0
   * @return {this}
   */
  translate(t_x = 0, t_y = 0) {
    return this.translateX(t_x).translateY(t_y);
  }

  /**
   * @param {number[]} viewbox [minx, miny, width, height]
   * @param {number} width new width
   * @param {number} height new height
   * @return {Transform}
   */
  static viewboxToTransform(viewbox, width, height) {
    return new Transform(
      -viewbox[0],
      -viewbox[1],
      width / viewbox[2],
      height / viewbox[3]
    );
  }

  /**
   * @return {Transform} identity transformation
   */
  static identity() {
    return new Transform(0, 0, 1, 1);
  }
}

export default Transform;
