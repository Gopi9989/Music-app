const Header = ({onHandleDark,mode}) => {

  return (
    <div className="header container p-4 shadow-lg  position-fixed">
      <div className="d-flex justify-content-between align-items-center ">
        <h2 className="fw-bold header-title"><span className="mx-3 text-danger"><i class="bi bi-boombox"></i></span>Music Pulse</h2>
        <div className="header-content fs-2 d-flex align-items-center g-3">
          <span className="text-danger"><i className="bi bi-heart-fill"></i></span>
          <button className="btn fs-2" onClick={() => onHandleDark()}>
            {mode?<i className="bi bi-moon-fill text-white"></i>:<i className="bi bi-brightness-high-fill"></i>}
          </button>
          <button className="btn btn-outline-success">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;