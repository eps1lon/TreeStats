import React from 'react';

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

    const id = input.props.model.replace(/\./g, '-');

    return (
      <span className="react-fragment">
        {React.cloneElement(label, { htmlFor: id })}
        {React.cloneElement(input, { id })}
      </span>
    );
  }
};

export default LabeledInput;
