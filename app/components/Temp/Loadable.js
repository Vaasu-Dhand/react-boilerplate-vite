/**
 *
 * Asynchronously loads the component for Temp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
