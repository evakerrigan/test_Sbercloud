import './MainPage.css';
import { Header } from '../../components/Header/Header';
import { FormMain } from '../../components/FormMain/FormMain';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserInfo, userInfoSlice } from '../../store/slice/userInfoSlice';


const sendRequestToBackend = async (): Promise<UserInfo> => {
  return {
    phone: '+79313151738',
    email: 'evakerrigan@gmail.com'
  };
}

export const Main = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    setTimeout(
      () => sendRequestToBackend().then((userInfo) => {
        dispatch(userInfoSlice.actions.setUserInfo(userInfo))
      }), 1000);
  })

  return (
    <div className="main__page">
      <Header />
      <FormMain />
    </div>
  );
};
