import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function uxDesign() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/Icon-busta.png" type="image/x-icon" />
        <title>Load of pixels</title>

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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

        <section className={styles.home}>
          <div className={styles.homeText}>
            <h5>Load of pixels</h5>
            <h1>
              Google UX/UI <br /> designer
            </h1>
            <p className={styles.homePara}>
              I am dedicated to delivering exceptional user experiences by
              following a meticulous design process.
              <br />
              <br />I consistently apply foundational UX concepts such as
              user-centered design, ensuring that every experience is tailored
              to users unique needs.
            </p>
            <a href="/about-us" className={styles.homeButton}>
              Contact us
            </a>
          </div>
        </section>
        <div className={styles.techStack}>Tech stack</div>
        <section className={styles.feature}>
          <div className={styles.featureContent}>
            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.webStack}
                  src="/Web-stack.png"
                  alt="HTML CSS and Javascript logos"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Web development</h4>
            </div>

            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.nodeJs}
                  src="/Node-js-transparent.png"
                  alt="Node.js logo"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Node.js developer</h4>
            </div>

            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.VScode}
                  src="/VS-Code.png"
                  alt="Virtual Studio Code logo"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Application development</h4>
            </div>

            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.MongoDB}
                  src="/Mongo-db.png"
                  alt="Mongo DB logo"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Backend developer</h4>
            </div>

            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.Azure}
                  src="/Azure-LOGO.png"
                  alt="Microsoft Azure logo"
                  width={100}
                  height={100}
                />
              </div>
              <h4>Cloud developer</h4>
            </div>
          </div>
        </section>

        <section className={styles.developerSection}>
          <div className={styles.developerImg}>
            <img
              // src="/Wireframe-DarkBlue.jpg"
              src="/Figma-vsCode-NextJs.png"
              alt="Figma logo, Next.js logo, VS code logo."
            />
          </div>

          <div className={styles.developerText}>
            <h5>
              Google UX designer and <br />
              Web design
            </h5>
            <h1>using Figma and Material design system.</h1>
            <p>
              As a Google UX Designer, I am dedicated to delivering exceptional
              user experiences by following a meticulous design process.
              <br />
              <br />
              Through the creation of wireframes and prototypes, I transform
              concepts into tangible designs that can be tested and refined.
            </p>
            <a href="/about-us" className={styles.homeButton2}>
              Contact us
            </a>
          </div>
        </section>

        <section className={styles.tour}>
          <div className={styles.centerText}>
            <h2>Popular services</h2>
          </div>

          <div className={styles.tourContent}>
            <div className={styles.box}>
              <img src="/server.jpg" alt="Virtual-server" />
              <h6>Cloud services</h6>
              <h4>AWS Azure GCP</h4>
            </div>

            <div className={styles.box}>
              <img src="/cloud-cpu.jpg" alt="laptop" />
              <h6>IT management</h6>
              <h4>Hardware and software</h4>
            </div>

            <div className={styles.box}>
              <img src="/AI-assistant.jpg" alt="ai-assistant" />
              <h6>Ai-assistant</h6>
              <h4>Large language models</h4>
            </div>

            <div className={styles.centerBtn}>
              <a href="/about-us" className={styles.tourBtn}>
                view Services
              </a>
            </div>
          </div>
        </section>

        <section className={styles.webAppsSection}>
          <div className={styles.webAppsText}>
            <h5>
              Accessibility is a <br />
              core principle in my work
            </h5>
            <h1>Design tailored to users unique needs.</h1>
            <p>
              Creating inclusive experiences that can be enjoyed by a diverse
              range of users.
              <br />
              <br />I embrace equity-focused design, considering the impact of
              design decisions on different social, cultural, and economic
              backgrounds, and striving for fair and inclusive experiences. read
              more
            </p>
            <a href="/about-us" className={styles.homeButton3}>
              read more
            </a>
          </div>
          <div className={styles.webAppsImg}>
            <img src="/Accessibility-icons.png" alt="laptop image" />
          </div>
        </section>

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
            <a href="#">Our story</a>
            <a href="#">benefits</a>
            <a href="#">team</a>
            <a href="#">careers</a>
          </div>

          <div className={styles.footerBox}>
            <h3>help</h3>
            <a href="#">FAQs</a>
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
              <a href="https://www.github.com">
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
