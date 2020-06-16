import React from 'react';

const ChartsListItem = (props) => {
  return(
    <div align="center">
        <br/>
        <img src={props.song["im:image"][2].label} alt=""/>
        <p>Title: {props.song["im:name"].label}</p>
        <p>Artist: {props.song["im:artist"].label}</p>
        <a href={props.song["im:collection"].link.attributes.href}><img height="50px" src="https://www.heatherpeace.com/wp-content/uploads/2018/10/apple-music_button.png" alt=""/></a>
        <hr width="400px" />
        <br/>
    </div>
  )
}

export default ChartsListItem;
