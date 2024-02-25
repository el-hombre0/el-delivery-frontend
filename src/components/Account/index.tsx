import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchUserData } from "../../redux/slices/userData";
import { useSelector } from "react-redux";

export const Account = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector((state: any) => state.userData.userData);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  console.log("userData:", userData);
  return (
    <div className="profile">
      <p>Имя: {userData.items.firstName}</p>
      <p>Фамилия: {userData.items.lastName}</p>
      <p>Email: {userData.items.email}</p>
      <p>Роль: {userData.items.role}</p>
    </div>
  );
};
