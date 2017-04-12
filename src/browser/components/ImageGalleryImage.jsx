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
      <img src={src} width="100" height="100" className="gallery-image" />
    );
  }
};

export default ImageGalleryImage;
