import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchUserData } from "../../redux/slices/userData";
import { useSelector } from "react-redux";

export const Account = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector((state: any) => state.userData.userData);
  const [value, setValue] = useState("");
  const onChange = (value: any) => {
    setValue(value);
  };
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  console.log("userData:", userData);
  return (
    <div className="profile">
      <form>
        <div className="form-group">
          <label htmlFor="firstNameInput">Имя</label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            value={userData.items.firstName}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Фамилия</label>
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            value={userData.items.lastName}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input
            type="text"
            className="form-control"
            id="emailInput"
            value={userData.items.email}
          ></input>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="roleAdminInput">
            Администратор
          </label>
          <input
            type="radio"
            className="form-check-input"
            name="adminRadio"
            id="roleAdminInput"
          ></input>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="roleUserInput">
            Пользователь
          </label>
          <input
            type="radio"
            className="form-check-input"
            name="adminRadio"
            id="roleUserInput"
          ></input>
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="roleBrigadeEmploeeInput">
            Сотрудник бригады
          </label>
          <input
            type="radio"
            className="form-check-input"
            name="adminRadio"
            id="roleBrigadeEmploeeInput"
          ></input>
        </div>
      </form>
      <p>Роль: {userData.items.role}</p>
    </div>
  );
};
