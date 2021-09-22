import './index.css'

const TabItem = props => {
  const {tabData, clickTabItem, isActive} = props
  const {displayText, tabId} = tabData

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const btnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="each-tab">
      <button type="button" onClick={onClickTabItem} className={btnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
