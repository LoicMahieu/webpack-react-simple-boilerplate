
import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route } from 'react-router'
import Main from './views/main'
import About from './views/pages/about'

const history = useBasename(createHistory)({
  basename: '/'
})

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Main}>
      <Route path='/about' component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
