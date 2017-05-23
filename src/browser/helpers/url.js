import { join } from 'path';

// TODO publicPath from webpack config or vice versa
export const publicPath = (path) => join('/', path);
