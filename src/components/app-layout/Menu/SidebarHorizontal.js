import React from 'react'
import { withRouter } from 'react-router-dom'

class SidebarHorizontal extends React.Component {
  render() {
    const { pathname } = this.props.location 
    const pathnameText = pathname.replace(/[/]/g, '')
        return (
          <div className="sidebarH">
            <p>{pathnameText === 'campanas' ? 'Campañas' : pathnameText }</p>
          </div>
        )
      } 
}

export default withRouter(SidebarHorizontal)