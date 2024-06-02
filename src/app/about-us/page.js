import Head from "next/head";
import styles from "./page.module.css";

export default function aboutUs() {
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
        <div className={styles.center}></div>

        <section className={styles.home}>
          <div className={styles.homeText}>
            <h5>Contact Harry</h5>
            <h1>services@loadofpixels.com</h1>
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

        <div className={styles.copyright}>
          <p>Copyright load of pixels 2024</p>
        </div>
      </main>
    </div>
  );
}
