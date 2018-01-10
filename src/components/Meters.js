import React, { Component } from 'react'
import MeterCircle from './Meter/MeterCircle'
import MeterCircleSemi from './Meter/MeterCircleSemi'
import MeterCircleDisk from './Meter/MeterCircleDisk'
import { randomInteger } from '../helpers/helpers'
import './Meters.css'

export default class Meters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: undefined,
      rand1: 22,
      rand2: 55,
      rand3: 33,
      rand4: 88,
    }
  }

  componentDidMount() {
    const id = setInterval(this.randomize, 2000)
    this.setState({ intervalId: id })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  randomize = () => {
    this.setState({
      rand1: randomInteger(10, 90),
      rand2: randomInteger(10, 90),
      rand3: randomInteger(10, 90),
      rand4: randomInteger(10, 90),
    })
  }

  render() {
    const { rand1, rand2, rand3, rand4 } = this.state

    const styles = {
      textStyle: {
        fontFamily: 'cursive',
        fill: '#000',
        fontSize: 24,
      },
    }

    return (
      <div className="meters-wrap">
        <div className="meters-header">
          <h1 className="meters-title">React SVG Meters</h1>
        </div>

        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircle lineWidth={20} value={rand1} rounded={true} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle lineWidth={70} value={rand2} rounded={false} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle
              lineWidth={10}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircle lineWidth={20} value={rand4} rounded={false} textStyle={styles.textStyle} />
          </div>
        </div>

        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircleSemi lineWidth={20} value={rand1} rounded={true} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi lineWidth={70} value={rand2} rounded={false} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi
              lineWidth={10}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleSemi lineWidth={20} value={rand4} rounded={false} textStyle={styles.textStyle} />
          </div>
        </div>

        <div className="meters-row">
          <div className="meters-meterwrap">
            <MeterCircleDisk lineWidth={6} value={rand1} rounded={true} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk value={rand2} rounded={false} showBorder={false} />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk
              lineWidth={10}
              value={rand3}
              rounded={true}
              lineBackground="#2E112D"
              lineForeground="#F0433A"
            />
          </div>
          <div className="meters-meterwrap">
            <MeterCircleDisk lineWidth={20} value={rand4} rounded={false} textStyle={styles.textStyle} />
          </div>
        </div>
      </div>
    )
  }
}
