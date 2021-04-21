import React, { Component } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'

export default class DeleteEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isbn: '',
      authorId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleBookSubmit = this.handleBookSubmit.bind(this)
    this.handleAuthorSubmit = this.handleAuthorSubmit.bind(this)
  }

  handleBookSubmit (e) {
    e.preventDefault()
    Axios.delete('http://localhost:4000/api', {
      isbn: `${this.state.isbn}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        table: 'books'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleAuthorSubmit (e) {
    e.preventDefault()
    Axios.delete('http://localhost:4000/api', {
      author_id: `${this.state.authorId}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        table: 'books'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    if (this.props.table === 'books') {
      return (
        <form onSubmit={this.handleBookSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Delete book from library</h2>
            <label>
            <p>ISBN</p>
            <textarea type='text' name='isbn' onChange={ this.handleChange } value={this.state.isbn} style={{ flex: 1 }}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
      )
    }
    return (
        <form onSubmit={this.handleAuthorSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Delete author from library</h2>
            <label>
            <p>Author ID</p>
            <textarea type='text' name='authorId' onChange={ this.handleChange } value={this.state.authorId} style={{ flex: 1 }}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

DeleteEntry.propTypes = {
  table: PropTypes.string
}
