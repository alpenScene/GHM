// @flow
import React, { PureComponent, Fragment } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import type { Dispatch } from '../types'
import type { State } from '../../types'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { toggleNavBar } from '../actions'

import {
  SideBar,
  TopBar,
  Home,
  Credits,
  CSGOGeneral,
  CSGOSchedule,
  CSGOSettings,
  CSGOStatistic
} from './'

// $FlowIgnore
import '../index.less'
import 'semantic-ui-css/semantic.min.css'

type Props = {
  show: boolean,
  dispatch: Dispatch
}

class Main extends PureComponent<Props> {
  _toggleShow = () => {
    const { dispatch, show } = this.props
    const toggle = toggleNavBar(!show)
    dispatch(toggle)
  }

  render () {
    const { show } = this.props
    const url = '/dashboard'
    return (
      <BrowserRouter>
        <Fragment>
          <TopBar show={show} toggleShow={this._toggleShow} />
          <SideBar show={show} />
          <div className={show ? 'main-container' : 'main-container fullscreen'}>
            <Switch>
              <Route path={url + '/'} exact component={Home} />
              <Route path={url + '/credits/'} component={Credits} />
              <Route path={url + '/csgo/general/'} component={CSGOGeneral} />
              <Route path={url + '/csgo/schedule/'} component={CSGOSchedule} />
              <Route path={url + '/csgo/statistics/'} component={CSGOStatistic} />
              <Route path={url + '/csgo/settings/'} component={CSGOSettings} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state: State) => ({
  show: state.dashboard.showNavbar
})

export default hot(module)(connect(mapStateToProps)(Main))