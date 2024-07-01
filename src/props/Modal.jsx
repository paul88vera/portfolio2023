import { createPortal } from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  name,
  repoLink,
  caseStudy,
  webLink,
  para,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={`modal-container`}>
      <div className="modal__container">
        <div className="modal__close-btn-container">
          <button
            className="modal__close-btn"
            onClick={isOpen ? onClose : null}>
            X
          </button>
        </div>
        <div className="modal__info-container">
          <div className="modal__info-column">
            <h2 className="modal__title">{name}</h2>
            <h3 className="modal__para">{para}</h3>
            <div className="modal__about-project">
              <h3>About This Project:</h3>
              <p>{caseStudy}</p>
            </div>
          </div>
        </div>
        <div className="modal__link-btn-container">
          {repoLink !== "#" ? (
            <a
              href={repoLink}
              className="modal__btn"
              target="_blank"
              rel="noreferrer noopener">
              Repository
            </a>
          ) : null}
          {webLink !== "#" ? (
            <a
              href={webLink}
              className="modal__web-btn"
              target="_blank"
              rel="noreferrer noopener">
              View Site
            </a>
          ) : null}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
