import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/Icon-busta.png" type="image/x-icon" />
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
              <a href="./web-development">Web development</a>
            </li>
            <li>
              <a href="./ux-design">UI/UX design</a>
            </li>
            <li>
              <a href="./web-design">Web design</a>
            </li>
            <li>
              <a href="./about-us">About us</a>
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
              Web development <br /> UI/UX designer
            </h1>
            <p className={styles.homePara}>
              I specialize in utilizing a range of technologies to create
              dynamic and engaging
              <br className="break-for-mobile" /> websites.
              <br />
              <br />
              Proficient in JavaScript HTML and CSS, I employ these foundational
              languages
              <br className="break-for-mobile" /> to craft interactive
              <br /> and visually appealing user interfaces.
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
                  width={50}
                  height={90}
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
                  width={50}
                  height={90}
                />
              </div>
              <h4>Node.js developer</h4>
            </div>

            <div className={styles.row}>
              <div className={styles.rowImg}>
                <img
                  className={styles.VScode}
                  src="/VS-code.png"
                  alt="Virtual Studio Code logo"
                  width={50}
                  height={90}
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
                  width={190}
                  height={90}
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
                  width={50}
                  height={90}
                />
              </div>
              <h4>Cloud developer</h4>
            </div>
          </div>
        </section>

        <section className={styles.developerSection}>
          <div className={styles.developerImg}>
            <img
              src="/cloud.jpg"
              alt="Colourful wireframe image of Cloud technologies."
            />
          </div>

          <div className={styles.developerText}>
            <h5>
              Web and Cloud <br />
              development
            </h5>
            <h1>
              using Microsoft Azure
              <br /> and AWS.
            </h1>
            <p>
              With knowledge of Amazon web services and Microsoft Azure, i
              leverage the
              <br className="break-for-mobile" /> power of the cloud to manage
              and secure my clients infrastructure.
              <br />
              <br />
              Using the power of Node.js I develop scalable and efficient
              server-side applications.
              <br className="break-for-mobile" /> Using React and Next.js, I
              build robust and responsive web applications, providing
              <br className="break-for-mobile" /> seamless user experiences
              across various devices.
            </p>
            <a href="/about-us" className={styles.webDevBtn}>
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
              <img src="/ai-assistant.jpg" alt="ai-assistant" />
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
          <div className={styles.webAppsImg}>
            <img src="/laptop.jpg" alt="laptop image" />
          </div>

          <div className={styles.webAppsText}>
            <h5>
              Google UX designer
              <br /> and web design
            </h5>
            <h1>
              We design and
              <br /> develop custom
              <br /> web apps.
            </h1>
            <p>
              Our approach to web design is characterized by a dynamic fusion of
              cutting-edge
              <br className="break-for-mobile" /> tools and technologies to
              craft responsive websites and web applications that
              <br className="break-for-mobile" /> stand out in the digital
              landscape.
              <br />
              <br />
              At the core of our design process, we harness the power of two
              industry-leading
              <br /> design platforms: Figma and Adobe XD. These versatile tools
              allow us to
              <br className="break-for-mobile" /> conceptualize, prototype, and
              refine our designs with precision and efficiency.
            </p>
            <a href="/about-us" className={styles.webAppsBtn}>
              read more
            </a>
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
