import React from 'react';
import ChartsListItem from "./ChartsListItem.js";

const ChartsList = (props) => {

  const songNodes = props.songs.map((song, index) => {
    return <ChartsListItem song={song} key={index} />
  });

  return(
    <div>
      {songNodes}
    </div>
  )
}

export default ChartsList;
