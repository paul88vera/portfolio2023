import Social from '../../img/socialAPI.png';

export default function Backend() {
  return (
    <section id="Backend">
      <div className="collage-card">
        <img src={Social} alt="Social Network API" width="300" />
        <div className="invisible">
          <a href="https://www.github.com/paul88vera/social-network-api">
            Social Network API
          </a>
          <p>Backend</p>
        </div>
      </div>
      <div className="collage-card">
        <img src="https://unsplash.it/300/400" alt="E-Commerce Backend" width="300" />
        <div className="invisible">
          <a href="https://www.github.com/paul88vera/e-commerce-back-end">
            E-Commerce
          </a>
          <p>Backend</p>
        </div>
      </div>
      <div className="collage-card">
        <img src="https://unsplash.it/300/400" alt="Readme Generator" width="300" />
        <div className="invisible">
          <a href="https://github.com/paul88vera/readme-generator">
            E-Commerce
          </a>
          <p>Backend</p>
        </div>
      </div>
    </section>
  );
}
