import React, { Component } from 'react';

class CircularSlider extends Component {
    state = { isPinching: false };

    componentDidMount() {
        this.x = 0;
        this.y = 0;
        document.addEventListener("mousemove", this.handleMouseMove)
        document.addEventListener("mouseup", this.handleMouseUp)
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleMouseMove)
        document.removeEventListener("mouseup", this.handleMouseUp)
    }

    handleMouseUp = () => {
        this.setState({ isPinching: false });
    };

    handleMouseDown = (e) => {
        e.preventDefault();
        const { left, top, width, height } = this.potar.getBoundingClientRect();
        this.x = e.pageX - (left + width / 2);
        this.y = (top + height / 2) - e.pageY;
        this.setState({ isPinching: true });
    };

    handleMouseMove = (e) => {
        if (this.state.isPinching) {
            const { left, top, width, height } = this.potar.getBoundingClientRect();
            const x = e.pageX - (left + width / 2);
            const y = (top + height / 2) - e.pageY;
            const dx = (x - this.x) / 100;
            const dy = (y - this.y) / 100;

            this.x = x;
            this.y = y;

            if (this.props.onChange) {
                let xValue = this.props.value + dx;
                let yValue = this.props.value + dy;

                if (xValue < 0) { xValue = 0 }
                if (xValue > 1) { xValue = 1 }
                if (yValue < 0) { yValue = 0 }
                if (yValue > 1) { yValue = 1 }
                this.props.onChange(xValue, yValue);
            }
        }
    };

    render() {
        const { radius, border, value } = this.props;
        const p = 2 * Math.PI * (radius - border / 2);
        const strokeWidth = border;
        const strokeDashoffset = p * (1 - value);
        const strokeDasharray = p;

        return (
            <div>
                <svg className="Slider"
                    ref={(potar) => this.potar = potar}
                    viewBox={`0 0 ${radius * 2} ${radius * 2}`}
                    onMouseDown={this.handleMouseDown}>

                    <circle
                        className="Slider-circle"
                        style={{ strokeWidth }}
                        r={radius - border / 2}
                        cx={radius}
                        cy={radius} />

                    <circle
                        className="Slider-bar"
                        style={{
                            strokeWidth,
                            strokeDashoffset,
                            strokeDasharray,
                        }}
                        r={radius - border / 2}
                        cx={radius}
                        cy={radius} />
                </svg>
                <span className="Slider-percent">{Math.round(this.props.value.toFixed(2) * 100)}%</span>
            </div>
        )
    }
}

export { CircularSlider };