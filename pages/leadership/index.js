import Link from 'next/link';
export default function Leadership () {
  return (
    <>
      <header id="header"  >
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-6 l-column-sm-6 l-column-md-3">
              <div className="site-logo"><Link href="/" className="site-logo"><h1 className="hero__title logo_text">the collective</h1></Link></div>
              
            </div>
            <div className="l-column-6 l-column-sm-6 l-column-md-9">
              <div className="navigation">
                <div className="navigation__button"><i className="icon-menu"></i></div>
                <nav className="navigation__nav">
                  <div className="navigation__close"><i className="icon-cross"></i></div>
                  <ul>
                    <li className=""><Link href="/company">The Company</Link></li>
                    <li className=""><Link href="/services">Services</Link></li>
                    <li ><Link href="/keymarket">Key Markets</Link></li>
                    <li className="active"><Link href="/leadership">Leadership</Link></li>
                    <li ><Link href="/careers">Careers</Link></li>
                    <li className="button button--primary button--filled"><Link href="/contactus" className="button button--primary button--filled">Contact us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section section-hero hero leadership">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-12 l-d-flex l-flex-v-align-center">
              <div className="hero__content">
                <h1 className="hero__title"> Leadership </h1>
                <span className="hero__seperator"></span>

                <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="hero__logo-box"><img src="assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="l-container top-margin-150">
        <div className="section__title">
          Team
        </div>
      </div>
      <section className="l-container">
        <div className="l-row space-between">
          <div className="l-column-md-3">
            <img src="assets/images/maleperson.jpg" alt="" />
            <p className="center leadership-image-text top-margin-15">lorem iprum</p>
            <div className="center font-size-24">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="l-column-md-3">
            <img src="assets/images/femaleperson.jpg" alt="" />
            <p className="center leadership-image-text top-margin-15">lorem iprum</p>
            <div className="center font-size-24">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="l-column-md-3">
            <img src="assets/images/maleperson.jpg" alt="" />
            <p className="center leadership-image-text top-margin-15">lorem iprum</p>
            <div className="center font-size-24">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="l-column-md-3">
            <img src="assets/images/femaleperson.jpg" alt="" />
            <p  className="center leadership-image-text top-margin-15">lorem iprum</p>
            <div className="center font-size-24">Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      </section>
      <section className="l-container top-margin-70">
        <div className="section__title top-margin-150">
          advisory board
        </div>
      </section>
      <section className="l-container bottom-margin-150">
        <div className="l-row bottom-margin">
          
          <div className="l-column-md-6 l-row">
            <div className="l-column-md-6">
              <img src="assets/images/leadershipwhitelady.png" alt="" />
            </div>
            <div className="l-column-md-6">
              <p className="leadership-image-text letter-spacing-2">lorem iprum</p>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="padding-bottom">
              <img src="assets/images/quotes.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. </p>
            </div>
          </div>
          <div className="l-column-md-6 l-row">
            <div className="l-column-md-6">
              <img src="assets/images/leadershipnegro.png" alt="" />
            </div>
            <div className="l-column-md-6">
              <p className="leadership-image-text letter-spacing-2">lorem iprum</p>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="padding-bottom">
              <img src="assets/images/quotes.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. </p>
            </div>
          </div>
          
          <div className="l-column-md-6 l-row">
            <div className="l-column-md-6">
              <img className="d-block" src="assets/images/leadershipnegro.png" alt="" />
            </div>
            <div className="l-column-md-6">
              <p className="leadership-image-text letter-spacing-2">lorem iprum</p>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="padding-bottom">
              <img src="assets/images/quotes.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. </p>
            </div>
          </div>
          <div className="l-column-md-6 l-row">
            <div className="l-column-md-6">
              <img src="assets/images/leadershipwhitelady.png" alt="" />
            </div>
            <div className="l-column-md-6">
              <p className="leadership-image-text letter-spacing-2">lorem iprum</p>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="padding-bottom">
              <img src="assets/images/quotes.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. </p>
            </div>
          </div>
          <div className="l-column-md-6 l-row">
            <div className="l-column-md-6">
              <img src="assets/images/leadershipwhitelady.png" alt="" />
            </div>
            <div className="l-column-md-6">
              <p className="leadership-image-text letter-spacing-2">lorem iprum</p>
              <p>Lorem ipsum dolor sit amet</p>
              <div className="padding-bottom">
              <img src="assets/images/quotes.png" alt="" />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-12 l-column-md-6">
              <Link href="/" className="site-logo"><h1 className="hero__title logo_text">the collective</h1></Link>
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
    </>
  )
}