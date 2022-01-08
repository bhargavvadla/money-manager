import './index.css'

const TransactionItem = props => {
  const {deleteItem, transactionItem} = props
  const {id, title, amount, type} = transactionItem

  const deleteListItem = () => {
    deleteItem(id)
  }
  return (
    <li className="transaction-item">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-btn"
          type="button"
          onClick={deleteListItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
