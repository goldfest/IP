import './Admin.css';

const LogIn = () => {
        return (
            <section className="section back admin">
            <div className="container">
              <div className="btn-group" role="group">
                <button id="items-add" className="btn btn-primary mb-1 btn-text-adm btn-dob">
                  Добавить фильм, сериал или телеканал
                </button>
              </div>
              <div>
                <table id="items-table" className="table table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Тип</th>
                      <th scope="col">Возрастн. кат.</th>
                      <th scope="col">Название</th>
                      <th scope="col">Жанр</th>
                      <th scope="col">Оценка</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </section>
        );
};

export default LogIn;
