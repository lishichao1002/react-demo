import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Page2 } from './pages/page2'
import { Page3 } from './pages/page3'
import { Home } from './pages/home'
import loadable from '@loadable/component'
import { loader } from './components/loader'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { UsersPage } from './pages/users/users'
import { UserAddPage } from './pages/users/addUser'

const Page1 = loader(() => import('./pages/page1'))
const Page4 = loadable(() => import('./pages/page4'))

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="nav">
            <ul>
              <li>
                <Link to={'/page1'}>Page 1</Link>
              </li>
              <li>
                <Link to={'/page2?page=2'}>Page 2</Link>
              </li>
              <li>
                <Link to={'/page3'}>Page 3</Link>
              </li>
              <li>
                <Link to={'/page4'}>Page 4</Link>
              </li>
              <li>
                <Link to={'/users'}>Page Users</Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route path={'/page1'} component={Page1}/>
              <Route path={'/page2'} render={(props) => <Page2 {...props}/>}/>
              <Route path={'/page3'}><Page3/></Route>
              <Route path={'/page4'}><Page4/></Route>
              <Route path={'/users'} component={UsersPage}/>
              <Route path={'/usersAdd'} component={UserAddPage}/>
              <Route path={'/'}><Home/></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

export default App
