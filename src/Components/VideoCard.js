import React from 'react'
import "./VideoCard.css"
import Avatar  from '@material-ui/core/Avatar';

function VideoCard(props) {
  return (
    <div className='VideoCard'>
      <img className='VideoCard_thumbnail' src={props.image} alt=" " />
      <div className='VideoCard_info'>
        <Avatar className='VideoCard_avatar' alt={props.channel} src={props.chamnelimage} />
        <div className='VideoCard_text'>
            <h4>{props.title}</h4>
            <p>{props.channel}</p>
            <p>
                {props.views}  •  {props.timestamp}
            </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
