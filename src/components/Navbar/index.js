import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, timer} = this.props

    return (
      <li className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="score">{timer} sec</p>
      </li>
    )
  }

  render() {
    return (
      <nav className="title-score-container">
        <ul className="navbar-list">
          <li>
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </li>
          {this.renderScores()}
        </ul>
      </nav>
    )
  }
}

export default NavBar
