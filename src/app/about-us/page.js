import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export default function aboutUs() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/Icon-busta.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.0.7/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/2.5.0/remixicon.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <a href="/" className={styles.logo}>
            Load of pixels
          </a>
          <ul className={styles.navbar}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/web-development">Web development</a>
            </li>
            <li>
              <a href="/ux-design">UI/UX design</a>
            </li>
            <li>
              <a href="/web-design">Web design</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
          </ul>

          <div className={styles.socials}>
            <a href="/" className={styles.followUs}>
              Follow us
            </a>
            <div className={styles.iconTop1}>
              <a href="https://www.linkedin.com">
                <i class="ri-linkedin-fill"></i>
              </a>
            </div>
            <div className={styles.iconTop2}>
              <a href="https://www.github.com">
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
            <div className={styles.iconTop3}>
              <a href="https://learn.microsoft.com/en-gb/users/harrydyson-8809/">
                <i class="ri-github-fill"></i>
              </a>
            </div>
            <div className={styles.menu}></div>
          </div>
        </header>
        <div className={styles.center}></div>

        <section className={styles.home}>
          <div className={styles.homeText}>
            <h5>Contact Harry</h5>
            <h1>loadofpixels@outlook.com</h1>
            <p className={styles.homePara}>
              Whatever your web needs are, we have you covered.
              <br />
              <br />
              From web design to web development, we have the tools and
              expertise to help you achieve your goals.
              <br />
              <br />
              Feel free to contact us for a free consultation.
            </p>
            <a href="/contact.html" className={styles.homeButton}>
              Contact us
            </a>
          </div>
        </section>

        {/* <section>
          <div className={styles.group}>
            <div className={styles.groupDiv}>
              <img className={styles.mongoDb} src="/mongoDB.svg" />
              <div className={styles.nodeJsLogo}>
                <img className={styles.imgGroup} src="/nodeJs.svg" />
                <div className={styles.groupWrapper}>
                  <div className={styles.overlapGroupWrapper}>
                    <div className={styles.overlapGroup}>
                      <div className={styles.ellipse}></div>

                      <div className={styles.textWrapper}>R</div>
                    </div>
                  </div>
                </div>
                <div className={styles.textWrapper2}>Load of pixels</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frame}>
                  <div className={styles.divWrapper}>
                    <div className={styles.frame2}>
                      <div className={styles.frame3}>
                        <div className={styles.rectangle}></div>
                        <div className={styles.rectangle2}></div>
                        <div className={styles.rectangle3}></div>
                        <div className={styles.rectangle4}></div>
                      </div>
                      <div className={styles.textWrapper3}>Microsoft Azure</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frame4}>
                <div className={styles.frame5}>
                  <img className={styles.img2} src="/htmlCssjs.svg" />
                  <div className={styles.textWrapper4}>Visual Studio Code</div>
                </div>
              </div>
              <div className={styles.overlapWrapper}>
                <div className={styles.overlap}>
                  <div className={styles.div2}>
                    <img className={styles.img3} src="/azureLogo.svg" />
                    <img className={styles.img4} src="img/group-28.png" />
                    <div className={styles.frame6}>
                      <div className={styles.textWrapper5}>JAVASCRIPT</div>
                      <div className={styles.overlapGroup2}>
                        <div className={styles.vectorWrapper}>
                          <img className={styles.vector} src="/vscode.svg" />
                        </div>
                        <img
                          className={styles.vector2}
                          src="img/vector-36.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.textWrapper6}>CSS</div>
                  <div className={styles.textWrapper7}>HTML</div>
                </div>
              </div>
              <img className={styles.githubPilot} src="/Pilot.svg" />
              <img className={styles.image} src="/amazonAWS.svg" />
            </div>
          </div>
        </section> */}

        <section className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h2>ready to explore</h2>
              <p>
                We use Figma to design custom web apps and HTML CSS and
                Javascript to build fully responsive websites.
                <br />
                <br />
                Harnessing the power of node.js and Next.js to build and deploy
                scalable and efficient web applications.
                <br />
                <br />
                We also use Microsoft Azure and AWS to manage and secure our
                clients infrastructure.
                <br />
                <br />
                Feel free to contact us for a free consultation.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.footer}>
          <div className={styles.footerBox}>
            <h3>services</h3>
            <a href="/Web-development.html">Web development</a>
            <a href="/UX-design.html">UX/UI design</a>
            <a href="/Web-design.html">Web design</a>
            <a href="#">Software development</a>
          </div>

          <div className={styles.footerBox}>
            <h3>About</h3>
            <a href="/`">Our story</a>
            <a href="/`">benefits</a>
            <a href="/`">team</a>
            <a href="/`">careers</a>
          </div>

          <div className={styles.footerBox}>
            <h3>help</h3>
            <a href="/`">FAQs</a>
            <a href="/Contact-us.html">contact</a>
          </div>

          <div className={styles.footerBox}>
            <h3>Social</h3>
            <div className={styles.icon1}>
              <a href="https://www.linkedin.com">
                <i class="ri-linkedin-fill"></i>
              </a>
            </div>
            <div className={styles.icon2}>
              <a href="https://www.twitter.com">
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
            <div className={styles.icon3}>
              <a href="https://www.github.com">
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </section>

        <div className={styles.copyright}>
          <p>Copyright load of pixels 2024</p>
        </div>
      </main>
    </div>
  );
}
