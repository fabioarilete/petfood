import Illustration from "../../assets/illustration.png";
import Header from "../../components/header/index";

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img
            src={Illustration}
            className="img-fluid"
            alt="Illustration PetFood"
          />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco para o seu pet ser feliz.
            </h2>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
            />

            <button className="btn btn-lg btn-block w-100 btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
