import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, name, repoLink, webLink, para }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={`modal-container`}>
      <div className="modal__container">
        <div className="modal__close-btn-container">
          <button className="modal__close-btn" onClick={isOpen ? onClose : null}>X</button>
        </div>
        <div className="modal__info-container">
          <p>{para}</p>
        </div>
        <div className="modal__link-btn-container">
          {repoLink !== "#" ? (
            <Link
              to={repoLink}
              className="modal__btn"
              target="_blank"
              rel="noreferrer noopener">
              Repository
            </Link>
          ) : null}
          <Link
            to={webLink}
            className="modal__web-btn"
            target="_blank"
            rel="noreferrer noopener">
            View {name}
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
