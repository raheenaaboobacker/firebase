import React from 'react'

export default function AdminSidebar() {
  return (
    <aside className="adminapp-sidebar">
    <div className="adminapp-sidebar__user">
      {/* <img className="adminapp-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image"/> */}
      <div>
        <p className="adminapp-sidebar__user-name">Edusite</p>
        <p className="adminapp-sidebar__user-designation"></p>
      </div>
    </div>
    <ul className="app-menu">
      <li><a className="app-menu__item" href="admindashboard"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>
      {/* <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-laptop"></i><span className="app-menu__label">UI Elements</span><i className="treeview-indicator fa fa-angle-right"></i></a>
        <ul className="treeview-menu">
          <li><a className="treeview-item" href="bootstrap-components.html"><i className="icon fa fa-circle-o"></i> Bootstrap Elements</a></li>
          <li><a className="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" target="_blank" rel="noopener"><i className="icon fa fa-circle-o"></i> Font Icons</a></li>
          <li><a className="treeview-item" href="ui-cards.html"><i className="icon fa fa-circle-o"></i> Cards</a></li>
          <li><a className="treeview-item" href="widgets.html"><i className="icon fa fa-circle-o"></i> Widgets</a></li>
        </ul>
      </li> */}
      <li><a className="app-menu__item" href="/addteacher"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Teachers</span></a></li>
      <li><a className="app-menu__item" href="/addstudent"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Students</span></a></li>
      {/* <li><a className="app-menu__item" href="/addmark"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Manage MArks</span></a></li> */}
      <li><a className="app-menu__item" href="/addmessage"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Add Message</span></a></li>
     </ul>
  </aside>
  )
}
