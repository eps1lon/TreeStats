import { fetchSourcesFromJson } from './data';

/**
 * init the app
 * @return {Function} thunk
 */
export default function init() {
  return (dispatch) => {
    dispatch(fetchSourcesFromJson(`./sources_${process.env.NODE_ENV}.json`));
  };
};
