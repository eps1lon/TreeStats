import React from 'react';

/**
 * displays a download link
 */
class DownloadLink extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  }

  /**
   * @return {JSX}
   */
  render() {
    const { url } = this.props;

    return (
      <a href={url} download="download.png">Download</a>
    );
  }
};

export default DownloadLink;
