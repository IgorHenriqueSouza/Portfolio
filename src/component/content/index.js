import './styles.css';
import Igorflix from '../../img/igorflix.png';
import Proffy from '../../img/proffy.PNG';

function Content() {
    return (
        <>
            <div className="project">
                <h2>
                    Projetos
                </h2>
                <div className="project1">
                    <a href="https://igor-flix.vercel.app/">
                        <img className="" src={Igorflix} alt="igorflix" />
                    </a>
                </div>
                <div className="project2">
                    <a href="https://proffy-bice.vercel.app/">
                        <img className="" src={Proffy} alt="proffy" />
                    </a>
                </div>

            </div>
        </>
    );
}
export default Content;