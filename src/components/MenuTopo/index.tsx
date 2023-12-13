import UserImg from '../../assets/images/user/1.jpg';

export default function MenuTopo() {
  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <div className="iq-sidebar-logo">
          <div className="top-logo">
            <a href="index.html" className="logo">
              <img src="images/logo.png" className="img-fluid" alt="" />
              <span>Sofbox</span>
            </a>
          </div>
        </div>
        <div className="navbar-breadcrumb">
          <h5 className="mb-0">Dashboard</h5>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ul>
          </nav>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-menu-bt align-self-center">
            <div className="wrapper-menu">
              <div className="line-menu half start" />
              <div className="line-menu" />
              <div className="line-menu half end" />
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          </div>
          <ul className="navbar-list">
            <li>
              <a
                href="#"
                className="search-toggle iq-waves-effect bg-primary text-white"
              >
                <img
                  src={UserImg}
                  className="img-fluid rounded"
                  alt="user"
                />
              </a>
              <div className="iq-sub-dropdown iq-user-dropdown">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height shadow-none m-0">
                  <div className="iq-card-body p-0 ">
                    <div className="bg-primary p-3">
                      <h5 className="mb-0 text-white line-height">
                        Hello Nik jone
                      </h5>
                      <span className="text-white font-size-12">Available</span>
                    </div>
                    <a
                      href="profile.html"
                      className="iq-sub-card iq-bg-primary-hover"
                    >
                      <div className="media align-items-center">
                        <div className="rounded iq-card-icon iq-bg-primary">
                          <i className="ri-file-user-line" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">My Profile</h6>
                          <p className="mb-0 font-size-12">
                            View personal profile details.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="profile-edit.html"
                      className="iq-sub-card iq-bg-primary-success-hover"
                    >
                      <div className="media align-items-center">
                        <div className="rounded iq-card-icon iq-bg-success">
                          <i className="ri-profile-line" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">Edit Profile</h6>
                          <p className="mb-0 font-size-12">
                            Modify your personal details.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="account-setting.html"
                      className="iq-sub-card iq-bg-primary-danger-hover"
                    >
                      <div className="media align-items-center">
                        <div className="rounded iq-card-icon iq-bg-danger">
                          <i className="ri-account-box-line" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">Account settings</h6>
                          <p className="mb-0 font-size-12">
                            Manage your account parameters.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="privacy-setting.html"
                      className="iq-sub-card iq-bg-primary-secondary-hover"
                    >
                      <div className="media align-items-center">
                        <div className="rounded iq-card-icon iq-bg-secondary">
                          <i className="ri-lock-line" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">Privacy Settings</h6>
                          <p className="mb-0 font-size-12">
                            Control your privacy parameters.
                          </p>
                        </div>
                      </div>
                    </a>
                    <div className="d-inline-block w-100 text-center p-3">
                      <a
                        className="iq-bg-danger iq-sign-btn"
                        href="sign-in.html"
                        role="button"
                      >
                        Sign out
                        <i className="ri-login-box-line ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}