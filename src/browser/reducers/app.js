import { Map } from 'immutable';

const initial = Map({
  dimensions: Map({
    width: 1900,
    height: 1550,
  }),
});

const app = () => {
  return initial;
};

export default app;
