
import Github from '../../img/github4.png';
import './styles.css';

function Footer() {
  return (
    <div className="footer">
      <h2>IgorSouzaDev</h2>
      <p>
      <a href="https://github.com/IgorHenriqueSouza">
        <img className="Logo" src={Github} alt="github"/>
        </a>
      </p>
    </div>
  );
}

export default Footer;