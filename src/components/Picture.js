import React from 'react';

const Picture = (props) => {
  return(
    <div className="picture">
      <img src={props.pic} />
    </div>
  );
}

export default Picture;
