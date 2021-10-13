import Link from 'next/link'

export default function keyMarket () {
  return (
    <div id="site">
      <header id="header">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-6 l-column-sm-6 l-column-md-3">
              <Link href="/" className="site-logo"><img src="/assets/images/logo-light.png" alt="site logo" /></Link>
            </div>
            <div className="l-column-6 l-column-sm-6 l-column-md-9">
              <div className="navigation">
                <div className="navigation__button"><i className="icon-menu"></i></div>
                <nav className="navigation__nav">
                  <div className="navigation__close"><i className="icon-cross"></i></div>
                  <ul>
                    <li className=""><Link href="/company">The Company</Link></li>
                    <li className=""><Link href="/services">Services</Link></li>
                    <li className="active"><Link href="/keymarket">Key Markets</Link></li>
                    <li><Link href="/leadership">Leadership</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li className="button button--primary button--filled"><Link href="/contactus"> Contact us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="main">
        <section className="section section-hero hero market">
          <div className="l-container">
            <div className="l-row">
              <div className="l-column-12 l-d-flex l-flex-v-align-center">
                <div className="hero__content">
                  <h1 className="hero__title">key <br /> markets</h1>
                  <span className="hero__seperator"></span>

                  <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="hero__logo-box"><img src="assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-key-markets">
          <div className="l-container container-sm">
            <div className="l-row">
              <div className="l-column-md-7 l-pr-md-50">
                <h2 className="section__title noMargin">01</h2>
                <h3 className="section__tilte2">Affordable Housing — multifamily — modular</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit.</p>
              </div>
              <div className="l-column-md-5">
                <img src="assets/images/keyMarket01.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-key-markets">
          <div className="l-container container-sm">
            <div className="l-row l-row-md-reverse">
              <div className="l-column-md-6 l-pr-md-50">
                <img className="imageDivPadding" src="assets/images/keyMarket02.png" alt="image" />
              </div>
              <div className="l-column-md-6">
                <h2 className="section__title noMargin">02</h2>
                <h3 className="section__tilte2">California Cannabis Industry</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="middle-section">
          <section className="section section-key-markets">
            <div className="l-container container-sm">
              <div className="l-row">
                <div className="l-column-md-7 l-pr-md-50">
                  <h2 className="section__title noMargin">03</h2>
                  <h3 className="section__tilte2">content studios</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit.</p>
                </div>
                <div className="l-column-md-5">
                  <img src="assets/images/keyMarketingTwo.png" alt="image" />
                </div>
              </div>
            </div>
          </section>
          <section className="section section-key-markets">
            <div className="l-container container-sm">
              <div className="l-row l-row-md-reverse">
                <div className="l-column-md-6 l-pr-md-50">
                  <img className="imageDivPadding" src="assets/images/keyMarket04.png" alt="image" />
                </div>
                <div className="l-column-md-6">
                  <h2 className="section__title noMargin">04</h2>
                  <h3 className="section__tilte2">adaptive reuse</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>

                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section section-key-markets">
          <div className="l-container container-sm">
            <div className="l-row">
              <div className="l-column-md-7 l-pr-md-50">
                <h2 className="section__title noMargin">05</h2>
                <h3 className="section__tilte2">Structural Upgrades for HOAs on coastal communities</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit.</p>

              </div>
              <div className="l-column-md-5">
                <img src="assets/images/keyMarket05.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-key-markets">
          <div className="l-container container-sm">
            <div className="l-row l-row-md-reverse">
              <div className="l-column-md-6 l-pr-md-50">
                <img className="imageDivPadding" src="assets/images//keyMarket06.png" alt="image" />
              </div>
              <div className="l-column-md-6">
                <h2 className="section__title noMargin">06</h2>
                <h3 className="section__tilte2">Miltary</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>

              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <div className="l-container container-sm">
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