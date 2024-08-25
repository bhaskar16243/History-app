import './index.css'

const Historyitem = props => {
  const {historyItem, deleteHistory} = props
  const {timeAccessed, title, domainUrl, logoUrl, id} = historyItem

  const onDeleteItem = () => {
    deleteHistory(id)
  }

  return (
    <li className="item">
      <p className="time">{timeAccessed}</p>
      <div className="app-data">
        <img className="img" src={logoUrl} alt="logo" />
        <div className="text-container">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onDeleteItem}
        />
      </button>
    </li>
  )
}

export default Historyitem
