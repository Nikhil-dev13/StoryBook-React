import React from 'react';
import GroupRole from './GroupRole';
import { withKnobs, object } from '@storybook/addon-knobs/react';

export default {
    component: GroupRole,
    title: 'GroupRole',
    decorators: [withKnobs],
    excludeStories: /.*Data$/,
};

export const initialStateData = {
    role:
        'Managing the sub-ordinates. Supervising the work in the respective domains. Interaction with other domains...',
    loading: false,
};

export const loadingStateData = {
    role: '',
    loading: true,
};

export const initialState = () => (
    <GroupRole stateData={object('state', initialStateData)} />
);
export const loadingState = () => (
    <GroupRole stateData={object('state', loadingStateData)} />
);
