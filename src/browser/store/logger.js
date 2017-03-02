import createLogger from 'redux-logger';

import { ZOOMED } from '../actions/zoom';
import { SHOW_TOOLTIP } from '../actions/tooltip';

export const verbose_actions = [
  ZOOMED,
  SHOW_TOOLTIP,
];

const logger = createLogger({
  // collapse all
  collapsed: true,
  // TOOLTIPs fire on mousemove
  predicate: (getState, action) => !verbose_actions.includes(action.type),
});

export default logger;
