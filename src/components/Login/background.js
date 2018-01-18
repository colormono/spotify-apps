import React, { Component } from 'react';
import { TweenMax, Linear } from 'gsap';

// Images
import imgFrame1 from '../../images/frame1.jpg';
import imgFrame2 from '../../images/frame2.jpg';
import imgFrame3 from '../../images/frame3.jpg';
import imgFrame4 from '../../images/frame4.jpg';
import imgFrame5 from '../../images/frame5.jpg';
import imgFrame6 from '../../images/frame6.jpg';
import imgFrame7 from '../../images/frame7.jpg';

class Background extends Component {
    constructor(props){
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            box1: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box2: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box3: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box4: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box5: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box6: { speed: 0, depth: 0, posX: 0, posY: 0 },
            box7: { speed: 0, depth: 0, posX: 0, posY: 0 }
        }
    }

    generateValues(x, y) {
        return {
            speed: 20,
            depth: Math.round(1+Math.random()*8),
            posX: x,
            posY: window.innerHeight*y
        }
    }

    setInitialValues() {
        this.setState({
            box1: this.generateValues(-500, .1),
            box2: this.generateValues(300, .2),
            box3: this.generateValues(750, .3),
            box4: this.generateValues(0, .4),
            box5: this.generateValues(800, .5),
            box6: this.generateValues(-700, .6),
            box7: this.generateValues(500, .7)
        });
    }

    componentWillMount() {
        this.setInitialValues();
    }

    componentDidMount() {
        this.animate();
        console.log(this.state);
    }

    animate() {
        let self = this;

        TweenMax.defaultEase = Linear.easeNone;

        // Frames
        TweenMax.set(this.frame1, { x: this.state.box1.posX+'px', y: this.state.box1.posY +'px' });
        TweenMax.to(this.frame1, this.state.box1.speed, { x: this.state.width+this.state.box1.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame1, self.state.box1.speed, 
                { x: -self.frame1.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame2, { x: this.state.box2.posX+'px', y: this.state.box2.posY +'px' });
        TweenMax.to(this.frame2, this.state.box2.speed, { x: this.state.width+this.state.box2.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame2, self.state.box2.speed, 
                { x: -self.frame2.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame3, { x: this.state.box3.posX+'px', y: this.state.box3.posY +'px' });
        TweenMax.to(this.frame3, this.state.box3.speed, { x: this.state.width+this.state.box3.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame3, self.state.box3.speed, 
                { x: -self.frame3.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame4, { x: this.state.box4.posX+'px', y: this.state.box4.posY +'px' });
        TweenMax.to(this.frame4, this.state.box4.speed, { x: this.state.width+this.state.box4.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame4, self.state.box4.speed, 
                { x: -self.frame4.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame5, { x: this.state.box5.posX+'px', y: this.state.box5.posY +'px' });
        TweenMax.to(this.frame5, this.state.box5.speed, { x: this.state.width+this.state.box5.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame5, self.state.box5.speed, 
                { x: -self.frame5.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame6, { x: this.state.box6.posX+'px', y: this.state.box6.posY +'px' });
        TweenMax.to(this.frame6, this.state.box6.speed, { x: this.state.width+this.state.box6.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame6, self.state.box6.speed, 
                { x: -self.frame6.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});

        TweenMax.set(this.frame7, { x: this.state.box7.posX+'px', y: this.state.box7.posY +'px' });
        TweenMax.to(this.frame7, this.state.box7.speed, { x: this.state.width+this.state.box7.posX+'px', ease: Linear.easeNone, onComplete: function(){
            TweenMax.fromTo(self.frame7, self.state.box7.speed, 
                { x: -self.frame7.offsetWidth+'px' }, 
                { x: self.state.width, repeat: -1, repeatDelay: Math.random()*3, ease: Linear.easeNone }
            );
        }});
    }

    render() {
        return(
            <div className="background">
                <div ref={(frame1) => { this.frame1 = frame1; }} className={ "block frame1 depth-" + this.state.box1.depth }>
                    <img src={imgFrame1} alt="" />
                </div>

                <div ref={(frame2) => { this.frame2 = frame2; }} className={ "block frame2 depth-" + this.state.box2.depth }>
                    <img src={imgFrame2} alt="" />
                </div>

                <div ref={(frame3) => { this.frame3 = frame3; }} className={ "block frame3 depth-" + this.state.box3.depth }>
                    <img src={imgFrame3} alt="" />
                </div>

                <div ref={(frame4) => { this.frame4 = frame4; }} className={ "block frame4 depth-" + this.state.box4.depth }>
                    <img src={imgFrame4} alt="" />
                </div>

                <div ref={(frame5) => { this.frame5 = frame5; }} className={ "block frame5 depth-" + this.state.box5.depth }>
                    <img src={imgFrame5} alt="" />
                </div>

                <div ref={(frame6) => { this.frame6 = frame6; }} className={ "block frame6 depth-" + this.state.box6.depth }>
                    <img src={imgFrame6} alt="" />
                </div>

                <div ref={(frame7) => { this.frame7 = frame7; }} className={ "block frame7 depth-" + this.state.box7.depth }>
                    <img src={imgFrame7} alt="" />
                </div>

            </div>
        );
    }
}

export default Background;