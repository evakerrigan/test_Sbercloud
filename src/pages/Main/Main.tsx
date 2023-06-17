import './MainPage.css';
import { Header } from '../../components/Header/Header';
import { FormMain } from '../../components/FormMain/FormMain';

export const Main = () => {
  return (
    <div className="main__page">
      <Header />
      <FormMain />
    </div>
  );
};
