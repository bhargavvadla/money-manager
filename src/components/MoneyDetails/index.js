const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-details-container">
      <div className="details-card card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="card-image"
        />
        <div className="details-card-text">
          <p className="title-tag">Your Balance</p>
          <p className="money" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="details-card card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="card-image"
        />
        <div className="details-card-text">
          <p className="title-tag">Your Income</p>
          <p testid="incomeAmount" className="money">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="details-card card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="card-image"
        />
        <div className="details-card-text">
          <p className="title-tag">Your Expenses</p>
          <p testid="expensesAmount" className="money">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
