import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Select</InputLabel>
        <Select defaultValue="" id="grouped-select">
          {/* <MenuItem value="">
            <em>1</em>
          </MenuItem> */}
          <ListSubheader>Original Custom LED Lights</ListSubheader>
          <MenuItem value={1}>1 Strips</MenuItem>
          <MenuItem value={2}>2 Strips</MenuItem>
          <MenuItem value={3}>3 Strips</MenuItem>
          <MenuItem value={4}>4 Strips</MenuItem>
          <MenuItem value={5}>5 Strips</MenuItem>
          <MenuItem value={6}>6 Strips</MenuItem>
          <MenuItem value={7}>7 Strips</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
