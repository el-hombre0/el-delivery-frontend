import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchUserData, updateUserData } from "../../redux/slices/userData";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import Select from "react-select";

const options = [
  {
    label: "ADMIN",
    value: "ADMIN",
  },
  {
    label: "USER",
    value: "USER",
  },
  {
    label: "MOBILE_GROUP",
    value: "MOBILE_GROUP",
  },
];

export const Account = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setLoading] = useState(true);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUserData()).then((data) => {
      setUserFirstName(data.payload.firstName);
      setUserLastName(data.payload.lastName);
      setUserEmail(data.payload.email);
      setUserRole(data.payload.role);
      setLoading(false);
    });
  }, [dispatch]);
  const onSubmit = async (values: any) => {
    console.log("userDataValues:", values);
    const data = await dispatch(updateUserData(values));
    if (data) {
      alert("Данные успешно изменены!");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
  } = useForm({
    mode: "onChange",
  });
  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile">
      {!isLoading ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="firstNameInput">Имя</label>
            <input
              type="text"
              className="form-control"
              id="firstNameInput"
              {...register("firstName")}
              required
              placeholder={userFirstName}
            ></input>
            {errors.firstName && <div>Ошибки</div>}
          </div>

          <div className="form-group">
            <label htmlFor="lastNameInput">Фамилия</label>
            <input
              type="text"
              className="form-control"
              id="lastNameInput"
              {...register("lastName")}
              required
              placeholder={userLastName}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input
              type="text"
              className="form-control"
              id="emailInput"
              {...register("email")}
              required
              placeholder={userEmail}
            ></input>
          </div>
          <Controller
            control={control}
            name="role"
            rules={{ required: "Роль обязательна!" }}
            render={({ field: { onChange, value, name, ref } }) => (
              <Select
                ref={ref}
                placeholder="Роли"
                options={options}
                value={options.find((c) => c.value === value)}
                onChange={(val) => onChange(val?.value)}
                defaultValue={{ label: userRole, value: userRole }}
              />
            )}
          />
          <button type="submit" disabled={!isDirty} className="btn btn-success">
            Применить изменения
          </button>
        </form>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};
