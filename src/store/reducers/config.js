//Default Configurations of App

import config from '../../config';

const DEFAULT_SETTINGS = {
    ...config,
};

const configReducer = (state = DEFAULT_SETTINGS) => state;

export default configReducer;