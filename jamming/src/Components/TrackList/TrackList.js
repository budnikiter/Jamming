import React from 'react';
import './TrackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <ul>
                    <li>Iron Maidan - Fear of the Dark</li>
                </ul>
                {/* {return this.props.tracks.map(Track.track)} */}
            </div>
        )
    }
}

export default TrackList;