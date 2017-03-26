import React from 'react';

const ArcadeListItem = (props) => {
  let picture = props.picture == '' ? 'http://rs271.pbsrc.com/albums/jj125/bagz_13/LONELY%20BOX/19-cute-funny-danbo-cardboard-box-art-always-hope.jpg~c200'  : props.picture

  return(
    <div className="small-6 medium-6 large-6 columns">
      <div className="card">
      <img src={picture} className="image"/>
        <div className="card-section">
          <h4><a href={`https://arcade-finder.herokuapp.com/items/` + props.id}>{props.name}</a></h4>
        </div>
      </div>
    </div>

  )
}

export default ArcadeListItem;
