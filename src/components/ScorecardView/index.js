import './index.css'

const ScorecardView = props => {
  const {onClickPlayAgain, score} = props

  return (
    <>
      <div className="win-or-lose-card">
        <div className="details-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="score-desc">YOUR SCORE</p>
          <p className="score-desc">{score}</p>
          <button
            type="button"
            className="score-button"
            onClick={onClickPlayAgain}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            Play Again
          </button>
        </div>
      </div>
    </>
  )
}

export default ScorecardView
