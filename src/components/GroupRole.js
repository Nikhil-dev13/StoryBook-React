import React, { Component } from 'react';
import { initialStateData } from './GroupRole.stories';
import { Grid, Card } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
const classes = {
    card_style: {
        margin: '10px 0px',
        padding: '30px 30px',
        textAlign: 'center',
        width: '500px',
    },
};

class GroupRole extends Component {
    constructor(props) {
        super(props);
        // initial state comes from storybook else provide the default initial state
        this.state = props.stateData ? props.stateData : initialStateData;
    }
    render() {
        return (
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'>
                {this.state.loading ? (
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
                            <p>{this.state.role}</p>
                        </Card>
                    </Grid>
                )}
            </Grid>
        );
    }
}

export default GroupRole;
