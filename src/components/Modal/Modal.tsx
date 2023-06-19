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
        <Link id="button-to-main" className="form__button next" to="/" onClick={onClose}>
          На главную
        </Link>
      </div>
    </div>
  );

};
