import './MainPage.css';
import { Header } from '../../components/Header/Header';
import { FormMain } from '../../components/FormMain/FormMain';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userInfoSlice } from '../../store/slice/userInfoSlice';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoSlice.actions.setUserInfo({
      phone: '+79313151738',
      email: 'evakerrigan@gmail.com'
    }));
  })

  return (
    <div className="main__page">
      <Header />
      <FormMain />
    </div>
  );
};
