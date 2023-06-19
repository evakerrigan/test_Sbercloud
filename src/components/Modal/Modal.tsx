import './Modal.css';
import { Link } from 'react-router-dom';

interface ModalProps {
  onClose: () => void;
}

export const Modal = ({onClose }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content success">
        <div className="modal__title">Форма успешно отправлена</div>
        <div className="modal__icon-wrapper">
          <div className="modal__icon"></div>
        </div>
        <Link id="button-to-main" className="form__button next" to="/">
          На главную
        </Link>
      </div>
    </div>
  );

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
