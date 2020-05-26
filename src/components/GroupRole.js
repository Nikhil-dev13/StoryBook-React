import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';

const classes = {
    card_style: {
        margin: '10px 0px',
        padding: '30px 30px',
        textAlign: 'center',
        width: '500px',
    },
};

const GroupRole = ({ stateData: { loading, role } }) => {
    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            {loading ? (
                <Grid item>
                    <Card style={classes.card_style}>
                        <h3>Role</h3>
                        <hr />
                        <Skeleton variant='text' animation='wave' />
                        <Skeleton variant='text' animation='wave' />
                    </Card>
                </Grid>
            ) : (
                <Grid item>
                    <Card style={classes.card_style}>
                        <h3>Role</h3>
                        <hr />
                        <p>{role}</p>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
};

GroupRole.propTypes = {
    stateData: PropTypes.object,
};

export default GroupRole;
