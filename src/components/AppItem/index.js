import './index.css'

const AppItem = props => {
  const {appData, clickedFruit} = props
  const {thumbnailUrl, imageUrl} = appData

  const displayImage = () => {
    clickedFruit(imageUrl)
  }

  return (
    <li className="appItem-container">
      <button type="button" className="button" onClick={displayImage}>
        <img className="logo" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default AppItem
