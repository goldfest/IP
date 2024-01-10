import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image5 from '../assets/200.png';
import { useUser } from '../components/types/hooks/UsersHook';
import UsersApiService from '../components/types/service/UsersApiService';
import './Profil.css';

const Profil = () => {
  const user = useUser(JSON.parse(localStorage.getItem('yohoho')));
  const navigate = useNavigate();

  const handlerLogOut = () => {
    localStorage.setItem('yohoho', null);
    navigate('/Page5');
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    typeName: user.user.typeName,
    typeFam: user.user.typeFam,
  });

  const handleEdit = () => {
    setEditedUser({
      typeName: user.user.typeName,
      typeFam: user.user.typeFam,
      phoneNumber: user.user.phoneNumber,
      typeDate: user.user.typeDate,
      typeEmailX2: user.user.typeEmailX2,
      typePasswordX2: user.user.typePasswordX2,
    });
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
    // Получение текущего пользователя
    const currentUser = await UsersApiService.get(user.user.id);

    const editedUserWithPasswordAndPhone = {
      ...editedUser,
      typePasswordX2: currentUser.typePasswordX2,
      phoneNumber: currentUser.phoneNumber,
    };
      if (
        Object.values(editedUser).some((value) => value !== '' && value !== undefined)
      ) {
        await UsersApiService.update(user.user.id, editedUserWithPasswordAndPhone);
        setIsEditing(false);
        user.getUser(user.user.id);
      } else {
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Ошибка при обновлении профиля:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
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
                    <h5 className="my-3">
                      {user.user.typeFam} {user.user.typeName}
                    </h5>
                    <button
                      type="button"
                      className="btn btn-primary button-style"
                      style={{ backgroundColor: '#160C57' }}
                      onClick={handleEdit}
                    >
                      Редактировать
                    </button>
                    <button type="button" className="btn btn-outline-primary ms-1 button-style" onClick={handlerLogOut}>
                        Выйти
                    </button>
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
                  {isEditing ? (
                    <>
                    {/* Форма редактирования */}
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Фамилия</p>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="typeFam"
                          className='input-prof'
                          value={editedUser.typeFam}
                          placeholder= { user.user.typeFam }
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Имя</p>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="typeName"
                          className='input-prof'
                          value={editedUser.typeName}
                          placeholder= { user.user.typeName }
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Почта</p>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="typeEmailX2"
                          className='input-prof'
                          value={editedUser.typeEmailX2}
                          placeholder= { user.user.typeEmailX2 }
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Номер телефона</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.user.phoneNumber}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Дата рождения</p>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          id="typeDate"
                          className='input-prof'
                          value={editedUser.typeDate}
                          placeholder= { user.user.typeDate }
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button className="btn btn-primary button-style" onClick={handleSave}>Сохранить</button>
                        <button className="btn btn-outline-primary ms-1 button-style" onClick={handleCancel}>Отмена</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Режим просмотра */}
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Фамилия, имя</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.user.typeFam} {user.user.typeName}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Почта</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.user.typeEmailX2}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Номер телефона</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {user.user.phoneNumber}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Дата рождения</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                        {user.user.typeDate}
                        </p>
                      </div>
                    </div>
                    </>
                    )}
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
