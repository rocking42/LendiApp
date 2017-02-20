import React from 'react';

function Album(props) {
  return (
    <div>
      <h3><a href={props.url}>{props.title}</a></h3>
      <img src={props.thumbnail} alt=""/>
    </div>
  )
}

export default Album
