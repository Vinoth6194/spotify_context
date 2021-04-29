import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/WWE_Champion_CM_Punk.jpg/170px-WWE_Champion_CM_Punk.jpg"
        ></img>
        <div className="footer___songInfo">
          <h4>Cult of Personality</h4>
          <p>CM Punk</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
