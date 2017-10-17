import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCustomAudio, withSoundCloudAudio } from 'react-soundplayer/addons';
import { PlayButton, Progress, VolumeControl, Icons } from 'react-soundplayer/components';

import'react-soundplayer/styles/icons.css';
import'react-soundplayer/styles/buttons.css';
import'react-soundplayer/styles/cover.css';
import'react-soundplayer/styles/progress.css';
import'react-soundplayer/styles/volume.css';



const nasaBg = './assets/player-bg.jpg';

class BackgroundSoundPlayer extends Component {
  render() {
    const { track, duration, currentTime } = this.props;

    return (
      <div className="color_FFF bgCover bg-top rounded relative" style={{backgroundImage: `url(${nasaBg})`}}>
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
        <div className="center py4 relative z1">
          <h3 className="h4 nowrap caps mb0">{track ? track.user.username : ''}</h3>
          <h2 className="h0 nowrap caps m0">{track ? track.title : ''}</h2>
        </div>
        <div className="layout horizontal center">
          <PlayButton
            className="fontSize_6"
            {...this.props}
          />
          <VolumeControl
            className='layout horizontal center'
            buttonClassName="flex-none"
            rangeClassName="custom-track-bg"
            {...this.props}
          />
          <Progress
            className="flex-auto bg-darken-3 rounded"
            innerClassName="rounded-left background_FF"
            value={(currentTime / duration) * 100 || 0}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}


export default withCustomAudio(BackgroundSoundPlayer);