import React from 'react';

/**
 * displays a download link
 */
class DownloadLink extends React.Component {
  static propTypes = {
    filename: React.PropTypes.string,
    label: React.PropTypes.string,
    url: React.PropTypes.string,
  }

  static defaultProps = {
    filename: 'download',
    label: 'Download',
  }

  /**
   * @return {JSX}
   */
  render() {
    const { filename, label, url } = this.props;

    return (
      <a href={url} download={filename}>{label}</a>
    );
  }
};

export default DownloadLink;
