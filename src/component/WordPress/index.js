import Christmas from '../../img/cbcChristmas.png';
import Leads from '../../img/cbcLeadsTV.png';
import Students from '../../img/cbcStudents.png';

export default function WordPress() {
  return (
    <section id="WordPress">
      <div className="collage-card">
        <img src={Christmas} alt="CBC Christmas" width="300" />
        <div className="invisible">
          <a href="https://www.cbcchristmas.com/">CBC Christmas</a>
          <p>WordPress</p>
        </div>
      </div>

      <div className="collage-card">
        <img src={Leads} alt="CBC LeadsTV" width="300" />
        <div className="invisible">
          <a href="https://www.communitybible.com/leadstv-test123455/">
            CBC LeadTV
          </a>
          <p>WordPress</p>
        </div>
      </div>

      <div className="collage-card">
        <img src={Students} alt="Students page" width="300" />
        <div className="invisible">
          <a href="https://www.communitybible.com/leadstv-test123455/">
            CBC Students Page
          </a>
          <p>WordPress</p>
        </div>
      </div>
    </section>
  );
}
