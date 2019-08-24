import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">
                <b>SPORTSFEVER360</b>
              </h5>
              <p>
                Etiam nec risus at mi semper ultrices quis sed dui. Fusce
                eleifend, dui tincidunt feugiat mattis, orci lectus pellentesque
                lacus, quis venenatis libero libero sit amet ligula. Mauris
                porttitor risus quis est tempus mattis.
              </p>
            </div>
            <hr class="clearfix w-100 d-md-none pb-3" />
            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Solutions & Products</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Score360</a>
                </li>
                <li>
                  <a href="#!">Blog360</a>
                </li>
                <li>
                  <a href="#!">Shop360</a>
                </li>
                <li>
                  <a href="#!">Live360</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Blog360</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Cricket</a>
                </li>
                <li>
                  <a href="#!">Football</a>
                </li>
                <li>
                  <a href="#!">Hockey</a>
                </li>
                <li>
                  <a href="#!">Misc</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2019 Copyright:<a href="#"> SportsFever360.com</a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
