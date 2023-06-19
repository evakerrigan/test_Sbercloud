import './Modal.css';

interface ModalProps {
  onClose: () => void;
}

export const ErrorModal = ({onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content error">
        <div className="modal__title">Ошибка</div>
        <div className="modal__icon-wrapper">
          <div className="modal__icon error"></div>
        </div>
        <button id="button-close" className="form__button next" onClick={onClose}>
          Закрыть
        </button>
        <div className="modal__close" onClick={onClose}></div>
      </div>
    </div>
  );


};
