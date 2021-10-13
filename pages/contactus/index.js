import Link from 'next/link';
export default function ContactUs () {
  return (
    <>
      <header id="header"  >
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
                    <li ><Link href="/keymarket">Key Markets</Link></li>
                    <li><Link href="/leadership">Leadership</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li className="active"><Link href="/contactus" className="button button--primary button--filled">Contact us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section section-hero hero contactus">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-12 l-d-flex l-flex-v-align-center">
              <div className="hero__content">
                <h1 className="hero__title">contact us</h1>
                <span className="hero__seperator"></span>

                <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="hero__logo-box"><img src="assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="l-container">
        <section className="l-row">
          <div className="l-column-md-6 l-column-sm-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit
              <br />
              vulputate sapien quis tempor.
            </p>
            <form >
              <div>
                <label htmlFor="name-field" className="text-color-one">Name</label>
                <input id="name-field" type="text" className="text-color-one border-bottom input full-width" />
              </div>
              <div >
                <label htmlFor="email-field" className="text-color-one">E-mail</label>
                <input type="text" id="email-field" className="border-bottom input full-width" />
              </div>
              <div >
                <label htmlFor="message-field" className="text-color-one font-light">Message</label>
                <input id="message-field" type="text" className="border-bottom input full-width" />
              </div>
              <input type="checkbox" id="checkbox-check" className="" />
              <p className="inline-display text-color-one"> <label htmlFor="checkbox-check">Clicking the button you agree with <a href="#"><span className="underline">Private Policy</span></a></label> </p>

              <br />
              <button className="button btn btn-top-margin button--filled">
                SEND
              </button>

            </form>
          </div>
          <div className="l-column-md-6 l-column-sm-12 bg-color padding-24 top-margin">
            <h2 className="text-color-two">OUR OFFICES</h2>
            <br />
            <p className="inline-display text-color-two">442 S Raymond Ave</p>
            <p className="text-color-two">Pasadena, CA, 91105 </p>
            <p className="inline-display text-color-two">213-628-8882 (Office) </p>
            <p className="text-color-two">213-402-8110 (Fax)</p>
            <h2 className="text-color-two">EMAIL:</h2>
            <p className="text-color-two">contact@ReaumeRichardson.com</p>
            <a href="#"><i className="icon-instagram-1 big-font"></i></a>
            <a href="#"><i className="icon-facebook-1 big-font pad-left"></i></a>

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
    </>
  )
}