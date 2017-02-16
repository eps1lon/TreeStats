import { combineEpics } from 'redux-observable';

import { getSourcesIndex, setSourcesIndex } from './data';


const root_epic = combineEpics(
  getSourcesIndex,
  setSourcesIndex
);

export default root_epic;
