import React from 'react';

const Picture = (props) => {

  //here the individual picture is defined and given all the properties required (src, alt)
  return(
    <div className="picture">
      <img src={props.pic} alt={props.comment}/>
    </div>
  );
}

export default Picture;
