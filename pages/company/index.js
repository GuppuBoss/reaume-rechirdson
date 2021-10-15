import Link from 'next/link'
export default function Home () {
  return (
    <div id="site">
      <header id="header">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-6 l-column-sm-6 l-column-md-3">
              <Link href="/out/index.html" className="site-logo"><a ><h1 className="hero__title logo_text">the collective</h1></a></Link>
            </div>
            <div className="l-column-6 l-column-sm-6 l-column-md-9">
              <div className="navaigation">
                <div className="navigation__button"><i className="icon-menu"></i></div>
                <nav className="navigation__nav">
                  <div className="navigation__close"><i className="icon-cross"></i></div>
                  <ul>
                    <li className="active"><Link href="/out/company.html">The Company</Link></li>
                    <li className=""><Link href="/out/services.html">Services</Link></li>
                    <li ><Link href="/out/keymarket.html">Key Markets</Link></li>
                    <li><Link href="/out/leadership.html">Leadership</Link></li>
                    <li><Link href="/out/careers.html">Careers</Link></li>
                    <li className="button button--primary button--filled"><Link href="/out/contactus.html" >Contact us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="main">
        <section className="section section-hero hero company">
          <div className="l-container">
            <div className="l-row">
              <div className="l-column-12 l-d-flex l-flex-v-align-center">
                <div className="hero__content">
                  <h1 className="hero__title">The <br/> Company</h1>
                  <span className="hero__seperator"></span>
                  <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <div className="hero__logo-box"><img src="./assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-company">
          <div className="l-container l-container--fluid l-container--limit">
            <div className="l-row">
              <div className="l-column-md-6 l-pr-md-50">
                <h2 className="section__title">Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo tellus a nunc sollicitudin, sed auctor diam venenatis. Sed porta lacinia ante, ut blandit lectus consequat sit amet. Phasellus porta nisl vitae odio convallis, a lobortis dui interdum. Etiam porta dapibus quam condimentum ultricies. Morbi sem neque, posuere sit amet nulla in, elementum tempor elit. In hac habitasse platea dictumst. Sed sodales tortor sed placerat ullamcorper. Fusce accumsan lobortis enim non mollis. Vivamus gravida, est ut congue eleifend, nisl purus pharetra arcu, varius gravida libero eros a libero. Proin sem neque, ultricies vel cursus ac, posuere ut nulla..</p>
              </div>
              <div className="l-column-md-6 l-d-flex l-flex-v-align-end l-pr-0"><img className="copmanyImage" src="assets/images/company.jpg" alt="image" /></div>
            </div>
          </div>
        </section>
        <section className="section section-services middleMarginTop">
          <div className="l-column-md-6 l-pr-md-50 middleText">
             <h2 className="section__title">mission & values</h2>
          </div>
          <div className="bg-part floatBackground"></div>
          <div className="l-container">
            <div className="l-row l-row-md-reverse">
              <div className="l-column-md-6 l-pr-md-50 secondbackground">
                <p className="secondContainerText">our mission Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="picturesContainer">
              <div className="flex-container customStyleForBox">
                <div className="smallImage">
                  <img src="assets/images/Vector.png" />
                  <p className="valueClass">value</p>
                </div>
                <div className="smallImage">
                  <img src="assets/images/Vector.png" />
                  <p className="valueClass">value</p>
                </div>                
                <div className="smallImage">
                  <img src="assets/images/growth.png" />
                  <p className="valueClass">value</p>
                </div>                
              </div>
              <div className="flex-container customStyleForBox">
                <div className="smallImage">
                  <img src="assets/images/Vector.png" />
                  <p className="valueClass">value</p>
                </div>
                <div className="smallImage">
                  <img src="assets/images/growth.png" />
                  <p className="valueClass">value</p>
                </div>                
                <div className="smallImage">
                  <img src="assets/images/Vector.png" />
                  <p className="valueClass">value</p>
                </div>                
              </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-leadership">

          <div className="l-container">
            <div className="l-row l-row-md-reverse">

              <div className="l-column-md-7 l-pr-md-50">
                <img src="assets/images/companyPageImage.png" alt="image" />
              </div>

              <div className="l-column-md-5">
                <h2 className="section__title">ESG <br/>program</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit vulputate sapien quis tempor. Duis ante lorem, dignissim eget augue eu, malesuada tempus mi. In id sapien eu nisi bibendum suscipit. Pellentesque mauris velit, scelerisque id tincidunt et, porttitor id ante. Vestibulum feugiat sed lacus non viverra. Donec commodo vulputate.</p>

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
    </div>
  )
}
