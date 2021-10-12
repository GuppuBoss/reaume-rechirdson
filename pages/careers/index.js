export default function Careers () {
  return (
    <>
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
      <section className="section section-hero hero careers">
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-12 l-d-flex l-flex-v-align-center">
              <div className="hero__content">
                <h1 className="hero__title">Careers</h1>
                <span className="hero__seperator"></span>

                <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="hero__logo-box"><img src="assets/images/icons/Brand_Mark_REVERSED 1.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="l-container">
          <div className="l-row">
            <div className="l-column-md-6">
              <div className="section__title margin-16">
                why work <br /> for us
              </div>
              <div className="margin-16 line-height">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo tellus a nunc sollicitudin, sed auctor diam venenatis. Sed porta lacinia ante, ut blandit lectus consequat sit amet. Phasellus porta nisl vitae odio convallis, a lobortis dui interdum. Etiam porta dapibus quam condimentum ultricies..
              </div>
              <input type="button" className="margin-16 text-center btn-half button border-none career-bg-color career-btn-text-color width-45 " readOnly value="JOIN US" />
            </div>
            <div className="l-column-md-6">
              <div className="l-row">
                <div className="l-column-md-6">
                  <img src="/assets/images/keyMarketingOne.png" alt="not found" />
                </div>
                <div className="l-column-md-6">
                  <img className="height-400" src="/assets/images/keyMarketingTwo.png" alt="key market" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="l-container">
        <div className="section__title margin-16">benefits</div>
        <div className="l-row">
          <div className="l-column-md-6">
            <p className="margin-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque <br /> commodo tellus a nunc sollicitudin, sed auctor diam venenatis.</p>
          </div>
          <div className="l-column-md-6">
            <div>
              <img src="/assets/images/planning.png" className="benifits-img" alt="planning" />
            </div>
          </div>
        </div>

      </section>
      <section>
        <div className="section__title margin-16 float-manager">
          manager <br /> or owner?
        </div>
        <div className="float-clear"></div>
      </section>
      <section className="section section-contact">
          <div className="bg-part"></div>
          <div className="l-container">
            <div className="l-row">

              <div className="l-column-md-6">
              <img src="/assets/images/meeting.png" alt="meeting" />
              </div>
              <div className="l-column-md-6 l-pr-md-50">
              <p className="padding-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo tellus a nunc sollicitudin, sed auctor diam venenatis. Sed porta lacinia ante, ut blandit lectus consequat sit amet. Phasellus porta nisl vitae odio convallis, a lobortis dui interdum. Etiam porta dapibus quam condimentum ultricies..
              </p>
              <input type="button " className="margin-16 text-center btn-half button border-none career-bg-color career-btn-text-color width-45" readOnly value="JOIN US" />


              </div>

            </div>
          </div>
        </section>
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