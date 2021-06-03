import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState({ volume: "30" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleChange(newValue);
  };

  /* React.useEffect(() => {
    if (props.onChange) {
      props.onChange(value);
    }
  }, [value.volume]); */

  return (
    <div className={classes.root}>
      {/*<Typography id="continuous-slider" gutterBottom>
      Volume
      </Typography>*/}
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            min={0}
            step={0.01}
            max={1}
            value={props.value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
