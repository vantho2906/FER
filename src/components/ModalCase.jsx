const ModalCase = ({ setIsOpen, film }) => {
  return (
    <div className="modal-show" onClick={() => setIsOpen(false)}>
      <div
        id="modal1"
        className="modal"
        style={{ display: 'block', top: '35%' }}
      >
        <div className="modal-content">
          <h4>Video for {film.title}</h4>
          <p>
            <iframe
              width="100%"
              height="400px"
              allow="accelerator; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              title={film.title}
              src={film.clip}
            ></iframe>
          </p>
        </div>
        <div className="modal-footer">
          <a className="modal-close red-text">Close</a>
        </div>
      </div>
    </div>
  );
};

export default ModalCase;
