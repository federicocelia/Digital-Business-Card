import federicoImg from "../src/assets/federico_celia.jpg";

export default function Info({ onToggleTheme, theme }) {
  return (
    <>
      <section className="info-section">
        <button
          id="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-pressed={theme === "light"}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

        <img className="card-picture" alt="Federico Celia" src={federicoImg} />

        <h1 className="name">Federico Celia</h1>
        <h2 className="job-title">Frontend Developer</h2>

        <a
          className="website"
          href="https://federicocelia.website"
          target="_blank"
          rel="noreferrer"
        >
          federicoCelia.website
        </a>

        <div className="call-to-action">
          <a
            className="contact-link email"
            href="mailto:webdevfedecelia@outlook.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
            </svg>
            <span>Email</span>
          </a>

          <a
            className="contact-link linkedin"
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="-143 145 512 512"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z   M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7  c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4  c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6  c35.5,0,63.3,23,63.3,72.4V508.1z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </>
  );
}
