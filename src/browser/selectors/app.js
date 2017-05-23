import {
  activeSource, dataSourceProps, dataSourceHuman,
} from '../selectors/data';

/**
 * @param {ReduxState} state
 * @return {string}
 */
export const heatmapTitle = (state) => {
  const active_source = activeSource(state.get('data'));
  const props = dataSourceProps(active_source);

  if (active_source === undefined) {
    return '';
  }

  let source_human = '';
  if (props !== undefined) {
    source_human = `${props.tree.name} - ${props.date.toLocaleDateString()}`;
  } else {
    source_human = dataSourceHuman(active_source);
  }

  const league = state.getIn([
    'poe', 'leagues',
    state.getIn(['data_filter', 'league']),
  ]);

  if (league === undefined) {
    return source_human;
  } else {
    return `${source_human} - ${league.name}`;
  }
};
