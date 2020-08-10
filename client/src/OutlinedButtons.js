import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './OutlinedButtons.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className="outlinedbuttons__button" variant="outlined" color="primary" href="#outlined-buttons">
        SHOP HERE
      </Button>
    </div>
  );
}
