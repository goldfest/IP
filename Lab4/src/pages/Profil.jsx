import Image5 from '../assets/photo.jpg';
import './Profil.css';

const Profil = () => {
  return (
      <div className="container back">
        <div className="row">
          <p className="lead stil stl">КиноСмешарики | Профиль</p>
          <p className="lead stil2 ">Профиль ➪</p>
          <section className='sect'>
            <div className="row">
              <div className="col-lg-4">
                <div className="card card-pr mb-4">
                  <div className="card-body text-center">
                    <img src={Image5} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                    <h5 className="my-3">Лобашов Иван</h5>
                    <p className="text-muted mb-1">Зритель</p>
                    <p className="text-muted mb-4">Ульяновск</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary button-style" style={{ backgroundColor: '#160C57' }}>
                        Редактировать
                      </button>
                      <button type="button" className="btn btn-outline-primary ms-1 button-style">
                        Выйти
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card-pr mb-4">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3" style={{ background: '#F5F6BE !important' }}>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{ background: '#F5F6BE !important' }}>
                        <p className="mb-0">Лицевой счет</p>
                        <p className="mb-0">Сбер</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{ background: '#F5F6BE !important' }}>
                        <p className="mb-0">Рубли</p>
                        <p className="mb-0">158,7 рублей</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card card-pr mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Фамилия, имя</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Лобашов Иван</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Почта</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Номер телефона</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Дата рождения</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">29.08.2004</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Город</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Ульяновск</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card card-pr mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4">Сейчас смотрим</p>
                        <p className="mb-1" style={{ fontSize: '.77rem' }}>
                          Белочка
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Спуск
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Обитель зла 5
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Жили-были
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Вместе
                        </p>
                        <div className="progress rounded mb-2" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card card-pr mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4">Посмотрели</p>
                        <p className="mb-1" style={{ fontSize: '.77rem' }}>
                          Мстители
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>
                          Кириешки
                        </p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};
export default Profil;
