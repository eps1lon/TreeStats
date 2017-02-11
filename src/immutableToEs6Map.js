export default function immutableToMap(map) {
  return new Map(Object.entries(map.toJS()));
};
