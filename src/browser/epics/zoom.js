import 'rxjs/add/operator/map';

import { resetZoom } from '../actions/zoom';
import { CALCULATE } from '../actions/heatmap';

export const syncZoom = (action$) => {
  return action$.ofType(CALCULATE).map(() => resetZoom());
};
