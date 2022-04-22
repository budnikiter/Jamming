import React from 'react';
import './Track.css';


class Track extends React.Component {

    renderAction () {
        if (this.props.isRemoval) { 
            return <button className='track-action'>-</button>
        } else {
            return <button className='track-action'>+</button>
        }
    }
    render() {
        return (
        <div className="Track">
            <div className="Track-information">
                {/* <h3><!-- track name will go here --></h3> */}
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            </div>
            {this.renderAction()}
        </div>
        )
    }
}

export default Track;