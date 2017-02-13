import React from 'react';

const uid = () => ['uid', Math.random().toString()].join('-');
const domId = (s) => s && s.replace ? s.replace(/\./g, '-') : uid();


/**
 * takes the model from the input and maps it to the domID and for attr
 * of the label
 * requires a <label /> child and assumes the other child to be the input
 */
class LabeledInput extends React.Component {
  /**
   * @param {ReactElement} child
   * @return {boolean} if its our label
   */
  isLabel(child) {
    return child.type == 'label';
  }

  /**
   * @return {ReactElement}
   */
  get label() {
    return this.props.children.filter((c) => this.isLabel(c))[0];
  }

  /**
   * @return {ReactElement}
   */
  get input() {
    return this.props.children.filter((c) => !this.isLabel(c))[0];
  }

  /**
   * @return {JSX}
   */
  render() {
    const label = this.label;
    const input = this.input;
    // default to react-redux-form model
    const idProp = this.props.idProp || 'model';

    const id = domId(input.props[idProp]);

    return (
      <span className="react-fragment">
        {React.cloneElement(label, { htmlFor: id })}
        {React.cloneElement(input, { id })}
      </span>
    );
  }
};

export default LabeledInput;
