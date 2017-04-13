import React from 'react';

/**
 *
 */
class ImageGalleryImage extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { src } = this.props;

    return (
      <img src={src} className="image-gallery-image" />
    );
  }
};

export default ImageGalleryImage;
