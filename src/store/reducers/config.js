//Reducer to handle action cases

import config from '../../config';

const DEFAULT_SETTINGS = { ...config }

const configReducer = (state = DEFAULT_SETTINGS, action) => state;

export default configReducer;