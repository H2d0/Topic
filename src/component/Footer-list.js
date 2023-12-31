import { Link } from "react-router-dom";
import "../style/style.css"

function FooterList() {
    return (
      <>
        <div className="site-footer ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 mb-4 pb-2">
                <Link
                  className="navbar-brand mb-2"
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <i className="fa-solid fa-biohazard"></i>
                  <span>Topic</span>
                </Link>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <h6 className="site-footer-title mb-3">Resources</h6>

                <ul className="site-footer-links">
                  <li className="site-footer-link-item">
                    <a href="/#" className="site-footer-link">
                      Home
                    </a>
                  </li>

                  <li className="site-footer-link-item">
                    <a href="/#" className="site-footer-link">
                      How it works
                    </a>
                  </li>

                  <li className="site-footer-link-item">
                    <a href="/#" className="site-footer-link">
                      FAQs
                    </a>
                  </li>

                  <li className="site-footer-link-item">
                    <a href="/#" className="site-footer-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                <h6 className="site-footer-title mb-3">Information</h6>

                <p className="namber text-white d-flex mb-1">
                  <a href="tel: 305-240-9671" className="site-footer-link">
                    305-240-9671
                  </a>
                </p>

                <p className="namber text-white d-flex">
                  <a
                    href="mailto:info@company.com"
                    className="site-footer-link"
                  >
                    info@company.com
                  </a>
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" type="button">
                        Thai
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item" type="button">
                        Myanmar
                      </button>
                    </li>

                    <li>
                      <button className="dropdown-item" type="button">
                        Arabic
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default FooterList;