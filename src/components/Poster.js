// http://pixijs.download/release/docs/index.html
// https://github.com/michalochman/react-pixi-fiber
// https://github.com/michalochman/react-pixi-fiber/blob/master/examples/src/CustomBunnymarkExample/CustomBunnymark.js
import React from 'react';
import { Sprite, Text, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import bunny from "../images/logo.png";

const Poster = (props) => {
  return (
    <Stage width={320} height={600} options={{ backgroundColor: 0x10bb99 }}>
      <Text text={props.name} x={200} y={200} style={{ fontFamily: 'Montserrat', fontSize: '18px' }} />
      <Sprite texture={PIXI.Texture.fromImage(bunny)} x={0} y={0} with={320} height={600} />
    </Stage>
  );
}

export default Poster;
