import './Footer.css'; // Don't forget to import your CSS file
import Logo from '../../assets/Logo.png';
import VK from '../../assets/vk.png';
import TG from '../../assets/tg.png';
import INST from '../../assets/inst.png';
import Google from '../../assets/google.png';
import Appst from '../../assets/Appst.png';
import Ic from '../../assets/icon22.png';

const Footer = () => {
    return (
        <footer className="text-center text_">
            <section className="">
                <div className="container text-center text-md-start mt-4 pt-5">
                    <a href="#" className="navbar-brand"><img className="brand" src={Logo} alt="Logo"></img></a>

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text_1"> Тех. поддержка</h6>
                            <p>
                                Ответим на любой ваш вопрос!
                            </p>
                            <p>
                                <a href="#!" className="text-reset">vano00189@mail.ru</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text_1">Для гостей </h6>
                            <p>
                                <a href="#!" className="text-reset">Акции и скидки</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Подарочные карты</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Пользовательское соглашение</a>
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text_1" >О нас</h6>
                            <p>
                                <a href="#!" className="text-reset">Контакты</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Помощь</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Партнерам</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4 ">
                            <h6 className="text-uppercase fw-bold mb-4 text_1">Мы в соц. сетях</h6>
                            <div className="social-icons">
                                <a href="#" className="text-reset me-3"><img src={VK} alt="vk" className="rounded border border-dark"></img></a>
                                <a href="#" className="text-reset me-3"><img src={TG} alt="tg" className="rounded border border-dark"></img></a>
                                <a href="#" className="text-reset"><img src={INST} alt="Inst" className="rounded border border-dark"></img></a>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mb-5 mt_">
                            <h6 className="text-uppercase fw-bold mb-4" ><a href="#" className="navbar-brand"><img className="brand" src={Ic} alt="Icon22"></img></a></h6>
                            <h6 className="text-uppercase fw-bold mb-0 "><a href="#" className="navbar-brand"><img src={Google} alt="Google"></img></a></h6>
                            <h6 className="text-uppercase fw-bold mb-0 mt_1"><a href="#" className="navbar-brand"><img src={Appst} alt="Appst"></img></a></h6>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
