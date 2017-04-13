import React from 'react';
import { List } from 'immutable';

import ImageGalleryImage from './ImageGalleryImage.jsx';

/**
 *
 */
class ImageGallery extends React.Component {
  static propTypes = {
    images: React.PropTypes.instanceOf(List).isRequired,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { images } = this.props;

    return (
      <ol className="image-gallery">
        {images.map((src, i) => {
          return <li key={i}><ImageGalleryImage src={src} /></li>;
        })}
      </ol>
    );
  }
};

export default ImageGallery;
