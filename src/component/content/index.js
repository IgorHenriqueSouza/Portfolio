import './styles.css';
import Igorflix from '../../img/igorflix.png';

function Content() {
    return (
        <>
            <div className="project">
                <h2>
                    Projetos
                </h2>
                <a href="https://igor-flix.vercel.app/">
                    <img className="" src={Igorflix} alt="github" />
                </a>

            </div>
        </>
    );
}
export default Content;