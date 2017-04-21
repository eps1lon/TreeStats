const path = require('path');

module.exports = { filename, fileProps, ctimeOutFile };

/**
 * generates the filename for the csv output
 * @param {string} root
 * @param {number} now
 * @param {string} tree_ident
 * @return {*}
 */
function filename(root, now, tree_ident) {
  // adjust gitignore accordingly
  return path.join(root, `${now}_${tree_ident}_get_trees.csv`);
};

/**
 * @param {string} filename
 * @return {Object} reverse of outFilename
 */
function fileProps(filename='') {
  const match = new RegExp(`^([^_]+)_([^_]+)_get_trees\.csv$`)
    .exec(path.basename(filename));

  if (match === null) {
    return undefined;
  } else {
    return {
      ctime: +match[1],
      tree_ident: match[2],
    };
  }
};

/**
 * extracts the creation date from a filename which
 * should be a js Date at the start of the basename
 * @param {string} filename
 * @return {number}
 */
function ctimeOutFile(filename) {
  const props = fileProps(filename);

  if (props === undefined) {
    return Number.NEGATIVE_INFINITY;
  } else {
    return props.ctime;
  }
};
