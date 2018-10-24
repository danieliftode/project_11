import React from 'react';
import Picture from './Picture';


const Gallery = (props) => {
  console.log(props.merge)
  return(
    <div>
      <h1>this is my gallery</h1>
      <Picture pic={props.pictures[0]}/>
      <Picture pic={props.pictures[1]}/>
      <Picture pic={props.pictures[2]}/>
      <Picture pic={props.pictures[3]}/>
      <Picture pic={props.pictures[4]}/>
      <Picture pic={props.pictures[5]}/>
      <Picture pic={props.pictures[6]}/>
      <Picture pic={props.pictures[7]}/>
      <Picture pic={props.pictures[8]}/>
      <Picture pic={props.pictures[9]}/>
      <Picture pic={props.pictures[10]}/>
      <Picture pic={props.pictures[11]}/>
      <Picture pic={props.pictures[12]}/>
      <Picture pic={props.pictures[13]}/>
      <Picture pic={props.pictures[14]}/>
      <Picture pic={props.pictures[15]}/>
      <Picture pic={props.pictures[16]}/>
      <Picture pic={props.pictures[17]}/>
    </div>
  );
}

export default Gallery;
