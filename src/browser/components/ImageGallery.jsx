import React from 'react';
import { List } from 'immutable';

import ImageGalleryImage from './ImageGalleryImage.jsx';

export const ACTIVE_CLASS_NAME = 'active';

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
    const { images, active } = this.props;

    return (
      <ol className="image-gallery">
        {images.map((src, i) => {
          const class_names = [];
          if (i === active) {
            class_names.push(ACTIVE_CLASS_NAME);
          }

          return (
            <li key={i} className={class_names.join(' ')}>
              <ImageGalleryImage src={src} />
            </li>
          );
        })}
      </ol>
    );
  }
};

export default ImageGallery;
