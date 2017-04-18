import React from 'react';

/**
 *
 */
class ImageGalleryImage extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    src: React.PropTypes.string,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { src, label } = this.props;

    return (
      <img src={src} alt={label} />
    );
  }
};

export default ImageGalleryImage;
