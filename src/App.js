import React, { Component, createRef } from 'react';
import uuid from 'uuid';
import WebViewer from '@pdftron/webviewer';
import { initializeVideoViewer } from '@pdftron/webviewer-video/dist/main-with-react';

class App extends Component {
  viewer = createRef();

  componentDidMount() {
    WebViewer(
      {
        path: '/apryse',
        selectAnnotationOnCreation: true,
      },
      this.viewer.current,
    ).then(async instance => {
      const license = '---- Insert commercial license key here after purchase ----';

      // Extends WebViewer to allow loading HTML5 videos (.mp4, ogg, webm).
      const {
          loadVideo,
      } = await initializeVideoViewer(
          instance,
          { license },
      );

      // Load a video at a specific url. Can be a local or public link
      // If local it needs to be relative to lib/ui/index.html.
      // Or at the root. (eg '/video.mp4')
      const videoUrl = 'https://pdftron.s3.amazonaws.com/downloads/pl/video/video.mp4';
      loadVideo(videoUrl);
    });
  }

  addPost = text => {
    this.setState(state => ({
      feed: state.feed.concat({ id: uuid.v4(), text })
    }));
  };

  toggleModal = () => this.setState(state => ({ modal: !state.modal }));

  render() {
    return(
    <div className="App" style={{height: "100vh"}}>
        <div className="webviewer" style={{height: "100vh"}} ref={this.viewer} />
    </div>)
  }
}

export default App;
