/* globals process */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

// Components
import Highlight from '../../components/highlight';
import VideoPlayer from '../../components/videoPlayer';

// Helpers
import { stringToEventDate } from '../../helpers/time';

// Actions
import { fetchEventLogic } from '../../redux/actions/events';

import './index.scss';

class EventContainer extends React.Component {
  static fetchData(params) {
    return fetchEventLogic(params.id);
  }

  componentWillMount() {
    if (!this.props.isRequesting && !this.props.event) {
      const { id } = this.props.match.params;

      this.props.fetchEvent(id);
    }
  }

  renderHighlight() {
    return this.props.event && (
      <Highlight
        pageTitle={this.props.event.title}
        pageBackground={this.props.event.image && this.props.event.image.url}
      />
    )
  }

  renderVideoPlayer() {
    return this.props.event && this.props.event.playlist && this.props.event.playlist.videos && (
      <section className="event__video-container">
        <VideoPlayer videos={this.props.event.playlist.videos} />
      </section>
    );
  }

  renderEventImage() {
    return this.props.event && this.props.event.image && (
      <section className="event__image-container">
        <img src={this.props.event.image.url} alt={this.props.event.title} />
      </section>
    );
  }

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        {this.renderHighlight()}

        <div className="event__event-container">
          {event && (
            <div className="event__description">
              <Helmet>
                <title>Dstudio - {event.title}</title>
                <meta property="og:title" content={`Dstudio - ${event.title}`} />
                <meta property="og:description" content={event.description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={event.image.url} />
                <meta property="og:image:alt" content={`Dstudio - ${event.title}`} />
              </Helmet>

              <p>{event.description}</p>
              <br />
              <p>{stringToEventDate(event.date)}</p>
              <br />
              <p>Av. Alda 464 Centro Diadema</p>
            </div>
          )}

          {this.renderEventImage()}

          {this.renderVideoPlayer()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isRequesting: state.events.requesting,
  event: state.events && state.events.result[ownProps.match.params.id],
})

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEventLogic(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);