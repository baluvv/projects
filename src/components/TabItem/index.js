import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isTabActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateActiveTabId(tabId)
  }
  const activeTabClassName = isTabActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
