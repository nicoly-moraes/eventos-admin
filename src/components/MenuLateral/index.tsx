export default function MenuLateral() {
  return (
    <div className="iq-sidebar">
      <div className="iq-sidebar-logo d-flex justify-content-between">
        <a href="index.html">
          <img src="images/logo.png" className="img-fluid" alt="" />
          <span>Sofbox</span>
        </a>
        <div className="iq-menu-bt align-self-center">
          <div className="wrapper-menu">
            <div className="line-menu half start" />
            <div className="line-menu" />
            <div className="line-menu half end" />
          </div>
        </div>
      </div>
      <div id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="iq-menu-title">
              <i className="ri-separator" />
              <span>Main</span>
            </li>
            <li className="active">
              <a
                href="#dashboard"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-home-4-line" />
                <span>Dashboard</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="dashboard"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className="active">
                  <a href="index.html">Dashboard 1</a>
                </li>
                <li>
                  <a href="dashboard1.html">Dashboard 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#mailbox"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-mail-line" />
                <span>Email</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="mailbox"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="app/index.html">Inbox</a>
                </li>
                <li>
                  <a href="app/email-compose.html">Email Compose</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="todo.html" className="iq-waves-effect">
                <i className="ri-chat-check-line" />
                <span>Todo</span>
              </a>
            </li>
            <li>
              <a
                href="#user-info"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-user-line" />
                <span>User</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="user-info"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="profile.html">User Profile</a>
                </li>
                <li>
                  <a href="profile-edit.html">User Edit</a>
                </li>
                <li>
                  <a href="add-user.html">User Add</a>
                </li>
                <li>
                  <a href="user-list.html">User List</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="calendar.html" className="iq-waves-effect">
                <i className="ri-calendar-2-line" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="chat.html" className="iq-waves-effect">
                <i className="ri-message-line" />
                <span>Chat</span>
              </a>
            </li>
            <li className="iq-menu-title">
              <i className="ri-separator" />
              <span>Components</span>
            </li>
            <li>
              <a
                href="#ui-elements"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-pencil-ruler-line" />
                <span>UI Elements</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="ui-elements"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="ui-colors.html">colors</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="ui-badges.html">Badges</a>
                </li>
                <li>
                  <a href="ui-breadcrumb.html">Breadcrumb</a>
                </li>
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-embed-video.html">Video</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
                <li>
                  <a href="ui-images.html">Images</a>
                </li>
                <li>
                  <a href="ui-list-group.html">list Group</a>
                </li>
                <li>
                  <a href="ui-media-object.html">Media</a>
                </li>
                <li>
                  <a href="ui-modal.html">Modal</a>
                </li>
                <li>
                  <a href="ui-notifications.html">Notifications</a>
                </li>
                <li>
                  <a href="ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="ui-popovers.html">Popovers</a>
                </li>
                <li>
                  <a href="ui-progressbars.html">Progressbars</a>
                </li>
                <li>
                  <a href="ui-tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="ui-tooltips.html">Tooltips</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#forms"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-profile-line" />
                <span>Forms</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="forms"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="form-layout.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-switch.html">Form Switch</a>
                </li>
                <li>
                  <a href="form-chechbox.html">Form Checkbox</a>
                </li>
                <li>
                  <a href="form-radio.html">Form Radio</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#tables"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-table-line" />
                <span>Table</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="tables"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="tables-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="data-table.html">Data Table</a>
                </li>
                <li>
                  <a href="table-editable.html">Editable Table</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#icons"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-list-check" />
                <span>Icons</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="icons"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="icon-dripicons.html">Dripicons</a>
                </li>
                <li>
                  <a href="icon-fontawesome-5.html">Font Awesome 5</a>
                </li>
                <li>
                  <a href="icon-lineawesome.html">line Awesome</a>
                </li>
                <li>
                  <a href="icon-remixicon.html">Remixicon</a>
                </li>
                <li>
                  <a href="icon-unicons.html">unicons</a>
                </li>
              </ul>
            </li>
            <li className="iq-menu-title">
              <i className="ri-separator" />
              <span>Pages</span>
            </li>
            <li>
              <a
                href="#authentication"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-pages-line" />
                <span>Authentication</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="authentication"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="sign-in.html">Login</a>
                </li>
                <li>
                  <a href="sign-up.html">Register</a>
                </li>
                <li>
                  <a href="pages-recoverpw.html">Recover Password</a>
                </li>
                <li>
                  <a href="pages-confirm-mail.html">Confirm Mail</a>
                </li>
                <li>
                  <a href="pages-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#menu-level"
                className="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <i className="ri-record-circle-line" />
                <span>Menu Level</span>
                <i className="ri-arrow-right-s-line iq-arrow-right" />
              </a>
              <ul
                id="menu-level"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <a href="#">
                    <i className="ri-record-circle-line" />
                    Menu 1
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="p-3" />
      </div>
    </div>
  );
}