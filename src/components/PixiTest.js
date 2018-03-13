import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import bunny from "../images/logo.png";

//Aliases
let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite;


class PixiTest extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const self = this;
    let cat;

    this.app = new Application({
      width: 800,         // default: 800
      height: 256,        // default: 600
      antialias: true,    // default: false
      transparent: false, // default: false
      resolution: 1       // default: 1
    });
    this.gameCanvas.appendChild(this.app.view);

    //load an image and run the `setup` function when it's done
    loader
      .add(bunny)
      .load(setup);


    function setup() {
      //Add the cat to the stage
      cat = new Sprite(PIXI.loader.resources[bunny].texture);

      //Change the sprite's position
      cat.x = 96;
      cat.y = 96;
      self.app.stage.addChild(cat);

      //Start the game loop by adding the `gameLoop` function to
      //Pixi's `ticker` and providing it with a `delta` argument.
      self.app.ticker.add(delta => gameLoop(delta));
    }

    function gameLoop(delta) {

      //Move the cat 1 pixel 
      cat.rotation += 0.01;
    }

    //this.app.start();
  }

  componentWillUnmount() {
    this.app.stop();
  }

  /**
   * Simply render the div that will contain the Pixi Renderer.
   */
  render() {
    let component = this;
    return (
      <div ref={(thisDiv) => { component.gameCanvas = thisDiv }} />
    );
  }


}

export default PixiTest;
