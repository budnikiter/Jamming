import React from 'react';
import './TrackList.css';
import '../SearchResults/SearchResults'

class TrackList extends React.Component {
    constructor (props) {
        super (props);
        
    }
    render() {
        return (
            <div className="TrackList">
              {
                  this.props.tracks.map(track => {
                      return <Track />
                  })
              }
            </div>
        )
    }
}

export default TrackList;