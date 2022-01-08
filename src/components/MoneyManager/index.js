import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactions} = this.state

    const updatedTransactions = transactions.filter(e => e.id !== id)
    this.setState({
      transactions: updatedTransactions,
    })
  }

  addTransaction = e => {
    e.preventDefault()

    const {titleInput, amountInput, typeInput} = this.state

    const selectedOption = transactionTypeOptions.find(
      eachOption => eachOption.optionId === typeInput,
    )
    const {displayText} = selectedOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = e => {
    this.setState({titleInput: e.target.value})
  }

  onChangeAmount = e => {
    this.setState({amountInput: e.target.value})
  }

  onChangeType = e => {
    this.setState({typeInput: e.target.value})
  }

  getIncome = () => {
    const {transactions} = this.state
    let totalIncome = 0
    transactions.forEach(e => {
      if (e.type === transactionTypeOptions[0].displayText) {
        totalIncome += e.amount
      }
    })

    return totalIncome
  }

  getExpenses = () => {
    const {transactions} = this.state
    let totalExpenses = 0

    transactions.forEach(e => {
      if (e.type === transactionTypeOptions[1].displayText) {
        totalExpenses += e.amount
      }
    })

    return totalExpenses
  }

  getBalance = () => {
    const {transactions} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactions.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, typeInput, transactions} = this.state

    const totalIncome = this.getIncome()
    const totalExpenses = this.getExpenses()
    const totalBalance = this.getBalance()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="app-main-container">
            <div className="app-header">
              <h1 className="heading">Bhargav Vadla</h1>
              <p className="description">
                Welcome back to your
                <span className="span-text"> Money Manager</span>
              </p>
            </div>
            <MoneyDetails
              balance={totalBalance}
              income={totalIncome}
              expenses={totalExpenses}
            />
            <div className="transaction-container">
              <div className="transaction-form-container">
                <form
                  className="transaction-form"
                  onSubmit={this.addTransaction}
                >
                  <h1 className="transaction-form-heading">Add Transaction</h1>
                  <label className="label" htmlFor="title">
                    TITLE
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="title"
                    placeholder="TITLE"
                    onChange={this.onChangeTitle}
                    value={titleInput}
                  />
                  <label className="label" htmlFor="amount">
                    AMOUNT
                  </label>
                  <input
                    className="input"
                    type="text"
                    id="amount"
                    placeholder="AMOUNT"
                    onChange={this.onChangeAmount}
                    value={amountInput}
                  />
                  <label className="label" htmlFor="select">
                    TYPE
                  </label>
                  <select
                    className="input drop-down"
                    onChange={this.onChangeType}
                    id="select"
                    value={typeInput}
                  >
                    {transactionTypeOptions.map(option => (
                      <option key={option.optionId} value={option.optionId}>
                        {option.displayText}
                      </option>
                    ))}
                  </select>
                  <div>
                    <button className="add-btn" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              </div>

              <div className="table-container">
                <h1 className="transaction-table-title">History</h1>
                <div className="table-header">
                  <p className="table-title">Title</p>
                  <p className="table-title">Amount</p>
                  <p className="table-title">Type</p>
                </div>
                <ul className="transaction-menu">
                  {transactions.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionItem={eachTransaction}
                      deleteItem={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
