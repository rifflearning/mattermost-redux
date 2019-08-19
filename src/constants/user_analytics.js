// Copyright (c) 2018-present Riff Learning, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
/* eslint-disable header/header */

/**
 * These strings are identifiers for user analytics data sets
 * The values use pascal casing instead of underscore delimited because the structs on
 * the backend (golang) like pascal casing for the names of fields
 */
export const Datasets = {
    USER_LEARNING_GROUPS: 'UserLearningGroups',
    LEARNING_GROUP_TYPES: 'LearningGroupTypes',
    USER_INTERACTIONS: 'UserInteractions',
};
