export const pointsToPath = (points) => {
  return points.filter(Array.isArray).reduce((path, point, i) => {
    return path + (i && 'L' || 'M') + point.join(',');
  }, '');
};
