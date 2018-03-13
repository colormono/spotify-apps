// http://pixijs.download/release/docs/index.html
// https://github.com/michalochman/react-pixi-fiber
// https://github.com/michalochman/react-pixi-fiber/blob/master/examples/src/CustomBunnymarkExample/CustomBunnymark.js
import React, { Component } from 'react';
import { Sprite, Text, Stage } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import RotatingBunny from "./pixi/RotatingBunny";

import bunny from "../images/logo.png";

const OPTIONS = {
  backgroundColor: 0x1099bb,
};

const centerAnchor = new PIXI.Point(0.5, 0.5);

class PixiFiberTest extends Component {
  state = {
    rotation: 0.01,
    x: 0,
    y: 0
  };

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    return (
      <div className="appCanvas" onMouseMove={this._onMouseMove.bind(this)}>
        <Stage width={window.innerWidth} height={window.innerHeight} options={OPTIONS}>
          <Text text={'COLORMONO'} x={400} y={400} style={{ fontFamily: 'Montserrat', fontSize: '18px' }} />
          <Sprite texture={PIXI.Texture.fromImage(bunny)} x={this.state.x} y={this.state.y} width={100} height={100} anchor={centerAnchor} />
          <RotatingBunny x={400} y={300} />
        </Stage>
      </div>
    );
  }
}

export default PixiFiberTest;
