import React, { Component } from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)

    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleOnChange = (event) => {
    const itemType = event.target.name
    const item = event.target.value
    console.log('itemType:', itemType)
    console.log('item:', item)
    console.log('State:', this.state)

    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={ this.handleSubmit }>
          <ProteinForm
            protein={ this.state.protein }
            handleOnChange={ this.handleOnChange }
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleOnChange={ this.handleOnChange }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleOnChange={ this.handleOnChange }
          />

          <SideForm
            sides={ this.state.sides }
            handleOnChange={ this.handleOnChange }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
