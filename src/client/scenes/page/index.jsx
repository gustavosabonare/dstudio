import React from 'react';

import { connect } from 'react-redux';

// Components
import Highlight from '../../components/highlight';
import Carousel from '../../components/carousel';
import Card from '../../components/card';
import VideoPlayer from '../../components/videoPlayer';

import './index.scss';

class Page extends React.Component {
  renderHighlight() {
    return <Highlight
      events={this.props.page.banner && this.props.page.banner.events}
      pageTitle={this.props.page.title}
      pageBackground={this.props.page.background && `http://localhost:1337${this.props.page.background.url}`}
    />
  }

  renderCarousels() {
    if (this.props.page.carrousels) {
      return (
        <div className="page__carousels-container">
          {this.props.page.carrousels.map(carrousel => (
            <Carousel key={carrousel.id} title={carrousel.title} events={carrousel.events} onClick={(id) => this.props.history.push(`details/${id}`)} />
          ))}
        </div>
      )
    }
  }

  renderCards() {
    if (this.props.page.cards) {
      return (
        <div className="page__cards-container">
          {this.props.page.cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )
    }
  }

  renderVideoPlayer() {
    if (this.props.page.playlist && this.props.page.playlist.player === 'Youtube') {
      return (
        <div className="page__video-container">
          <VideoPlayer videos={this.props.page.playlist.videos} />
        </div>
      );
    }
  }

  render() {
    const { page } = this.props;

    if (!page) {
      return null;
    }

    return (
      <div className="page">
        {this.renderHighlight()}

        <main>
          {this.renderVideoPlayer()}
          {this.renderCarousels()}
          {this.renderCards()}
        </main>
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentPage = state.pages.result.filter(page => page.url === ownProps.match.url)[0];

  return ({
    pageLoading: state.pages.requesting,
    page: currentPage,
  })
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page);