import { Map } from 'immutable';

const hasCleanQuery = (location) => {
  if (location && location.search) {
    return location.search.startsWith('?clean');
  } else {
    return false;
  }
};

const initial = Map({
  clean: hasCleanQuery(window.location),
  dimensions: Map({
    width: 1900,
    height: 1550,
  }),
});

const app = () => {
  return initial;
};

export default app;
