import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Loader from '../common/Loader';
const streamUrl = 'https://s3-eu-west-1.amazonaws.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3';

class ViewStory extends Component {
  constructor (props) {
    super(props);
    this.onGoBackHandler = this.onGoBackHandler.bind(this);
  }

  componentDidMount () {
    const {userId, storyId} = this.props.params;
    this.props.viewStory({userId, storyId});
  }
  onGoBackHandler(){
    this.his
  }
  render () {
    const {isFetching, error, result} = this.props;
    return (
      <div className="container">

        <div className="margin24 noSideMargin">
          <div className="icon-arrow-left2 fontSize_8 cursorHand margin24 onlyBottomMargin" onClick={browserHistory.goBack}/>
          <section>
            {error !== null &&
            <h3 className="text-danger text-center">Something went wrong!</h3>}
            {isFetching === true && error === null && <Loader/>}
            {isFetching === false && error === null &&
            Object.keys(result).length > 0 && <div className="clearfix">
              <div className="row noMargin">
                <p>{result.data[0].story.storyName}</p>
                <p>{result.data[0].story.genre}</p>
              </div>
              <audio controls autoPlay={true}>
                <source src={`http://localhost:3000/api/v1/audio/${String(
                  result.data[0].story.path).replace('uploads/', '')}`}
                        type="audio/wav"/>
              </audio>
              {/*<AWSSoundPlayer2
                streamUrl={`http://localhost:3000/api/v1/audio/${String(
                  result.data[0].story.path).replace('uploads/', '')}`}
                trackTitle={trackTitle} />*/}
            </div>}
          </section>
        </div>
      </div>);

  }
}

export default ViewStory;