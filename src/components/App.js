import React, { Component } from 'react'
import styles from '../styles/screen.scss'

class App extends Component {

  constructor () {
    super()
    this.state = {
      items: [],
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat({
        label: this.state.value,
        done: false
      }),
      value: ''
    })
  }
  toggleComplete = (i) => {
    const items = this.state.items.slice()
    items[i].done = !items[i].done
    this.setState({
      items: items
    })
  }
  toggleRemove = (i) => {
    const items = this.state.items.slice()
  }

  render () {
    const items = this.state.items.map((item, i) => {
      const isDone = item.done ? styles.done : ''
      return <li className={isDone} key={i} onClick={() => this.toggleComplete(i)}>{item.label}</li>
    })
    return <div>
      <header>
        <h1>One List‽</h1>
      </header>
      <ul>
        {items}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='todo' value={this.state.value} onChange={this.handleChange} placeholder='Wat?' />
      </form>
    </div>
  }
}

export default App
