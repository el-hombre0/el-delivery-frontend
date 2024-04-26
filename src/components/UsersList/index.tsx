import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useSelector } from "react-redux";
import { fetchAllUsers, selectIsAuth } from "../../redux/slices/auth";

/**
 * Список пользователей для администратора
 */
export const UsersList = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const usersList = useSelector((state: any) => state.auth.allUsersData);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const isUsersListLoading = usersList.status === "loading";
  const isUsersListError = usersList.status === "error" && !isAuth;
  // const usersList = [
  //   {
  //     id: 0,
  //     firstName: "Carl",
  //     lastName: "Jonson",
  //     email: "adcjhba@mail.ru",
  //     role: "ADMIN",
  //     orders: []
  //   },
  //   {
  //     id: 1,
  //     firstName: "Ivan",
  //     lastName: "Marx",
  //     email: "marx@mail.ru",
  //     role: "USER",
  //     orders: []
  //   }
  // ];
  return (
    <div className="container">
      <h1>Список пользователей</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>E-mail</th>
            <th>Роль</th>
            <th>Заказы</th>
          </tr>
        </thead>
        <tbody>
          {isUsersListError
            ? alert("Ошибка загрузки списка пользователей")
            : isUsersListLoading
            ? [...Array(5)]
            : usersList.data.usersList.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.orders}</td>
                </tr>
              ))}
            {/* {usersList.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.clientPhone}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.orders}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};
