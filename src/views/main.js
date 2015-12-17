
import React, { Component } from 'react'
import Header from './layout/header'
import Navigation from './layout/navigation'

// Load main styles
import './main.css'

export default class Main extends Component {
  render () {
    return (
      <main>
        <Header />
        <Navigation />
        {this.props.children}
      </main>
    )
  }
}
