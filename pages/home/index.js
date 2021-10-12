import { useState } from 'react';

export default function HomePage () {

  return (
    <div id="site" >
      <header id="header"  >
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-6 l-column-sm-6 l-column-md-3">
              <a href="/home" className="site-logo"><img src="/assets/images/logo-light.png" alt="site logo" /></a>
            </div>
            <div className="l-column-6 l-column-sm-6 l-column-md-9">
              <div className="navigation">
                <div className="navigation__button"><i className="icon-menu"></i></div>
                <nav className="navigation__nav">
                  <div className="navigation__close"><i className="icon-cross"></i></div>
                  <ul>
                    <li className="active"><a href="#">The Company</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="#">Key Markets</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#" className="button button--primary button--filled">Contact us</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="main">
        <section className="section section-hero hero home">
          <div className="l-container">
            <div className="l-row">
              <div className="l-column-12 l-d-flex l-flex-v-align-center">
                <div className="hero__content">
                  <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur</p>
                  <h1 className="hero__title">Reaumerichardson welcomes you!</h1>
                  <span className="hero__seperator"></span>
                  <span className="hero__social"><a href="#"><i className="icon-facebook-1"></i></a> <a href="#"><i className="icon-instagram-1"></i></a></span>
                  <div className="hero__logo-box"><img src="assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-company">
          <div className="l-container l-container--fluid l-container--limit">
            <div className="l-row">
              <div className="l-column-md-5 l-pr-md-50">
                <h2 className="section__title">The<br />Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>
                <div className="l-row">
                  <div className="l-column-6">
                    <div className="counter">
                      <div className="counter__number">420</div>
                      <p className="counter__title">Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="l-column-6">
                    <div className="counter">
                      <div className="counter__number">240</div>
                      <p className="counter__title">Lorem ipsum dolor</p>
                    </div>
                  </div>
                </div>
                <div className="button-container"><a href="#" className="button button--primary button--border">About Company</a></div>
              </div>
              <div className="l-column-md-7 l-d-flex l-flex-v-align-end l-flex-h-align-end l-pr-0"><img src="assets/images/company.jpg" alt="image" /></div>
            </div>
          </div>
        </section>

        <section className="section section-services">
          <div className="bg-part"></div>
          <div className="l-container">
            <div className="l-row l-row-md-reverse">
              <div className="l-column-md-7 l-pr-md-50">
                <img src="assets/images/house.jpg" alt="house image" />
              </div>
              <div className="l-column-md-5">
                <h2 className="section__title">services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit.</p>

                <div className="button-container"><a href="#" className="button button--primary button--border">View services</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-key-markets">

          <div className="l-container">
            <div className="l-row">

              <div className="l-column-md-7 l-pr-md-50">
                <h2 className="section__title">Key <br />Markets</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>

                <div className="button-container"><a href="#" className="button button--primary button--border">View key markets</a></div>
              </div>
              <div className="l-column-md-5">
                <img src="assets/images/Group 147.jpg" alt="image" />
              </div>

            </div>
          </div>
        </section>
        <section className="section section-leadership">

          <div className="l-container">
            <div className="l-row l-row-md-reverse">

              <div className="l-column-md-7 l-pr-md-50">
                <img src="assets/images/Group 148.jpg" alt="image" />
              </div>

              <div className="l-column-md-5">
                <h2 className="section__title">Leadership</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>

                <div className="button-container"><a href="#" className="button button--primary button--border">Read More</a></div>
              </div>

            </div>
          </div>
        </section>
        <section className="section section-contact">
          <div className="bg-part"></div>
          <div className="l-container">
            <div className="l-row">

              <div className="l-column-md-7 l-pr-md-50">
                <h2 className="section__title">Contact Us</h2>
                <p>
                  <strong>OUR OFFICES</strong><br />
                  442 S Raymond Ave<br />
                  Pasadena, CA, 91105<br /><br />

                  213-628-8882 ( Office )<br />
                  213-402-8110 ( Fax )
                </p>


              </div>
              <div className="l-column-md-5">
                <img src="assets/images/Rectangle 17.png" alt="image" />
              </div>

            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-12 l-column-md-6">
              <a href="index.html" className="site-logo"><img src="assets/images/logo-dark.png" alt="site logo" /></a>
              <p>©2020 REAUME RICHARDSON | ALL RIGHTS RESERVED |</p>
            </div>
            <div className="l-column-12 l-column-md-6 l-d-flex l-flex-v-align-end">
              <form action="" className="subscription-form">
                <label htmlFor="email">Sign up for monthly updates</label>
                <div className="l-input-group">
                  <input id="email" type="email" name="email" placeholder="Enter your E-mail" />
                  <span className="input-group-btn">
                    <button className="button" type="button">subscribe</button>
                  </span>
                </div>
              </form>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}
