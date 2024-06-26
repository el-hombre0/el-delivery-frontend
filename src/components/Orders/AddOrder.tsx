import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/auth";
import { useEffect } from "react";
import instance from "../../services/axios_helper";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import getToken from "../../services/getToken";
import { fetchUserData } from "../../redux/slices/userData";
import { AddOrderForm } from "./AddOrderForm";
import useGeolocation from "../../hooks/useGeolocation";
import { addOrderFormValues } from "../../types/addOrderFormValues.types";

export const AddOrder = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state: any) => state.userData.userData);
  const routeInfo = useSelector((state: any)=> state.routeInfo.routeInfo)
  const dispatch = useAppDispatch();

  const isUserDataLoading = userData.status === "loading";
  const isUserDataError = userData.status === "error" && !isAuth;
  const userAddress = useSelector(
    (state: any) => state.userAddress.userAddress
  );
  const { register, handleSubmit, reset, control } = useForm<addOrderFormValues>({
    // defaultValues: {
    //   clientName: "Сергей",
    //   clientSurname: "Осипов",
    //   clientPhone: "89997771144",
    //   clientEmail: "osipov@mail.ru",
    //   carModel: "Tesla Model S",
    //   requiredKiloWatts: 30.0,
    //   distanceToClient: 19.5,
    //   address: "Vladivostok, Lenina st., b. 9",
    //   cost: 5900.0,
    //   paymentMethod: "",
    // },
    mode: "onChange",
  });
  // }
  useEffect(() => {
    dispatch(fetchUserData()).then((data) => {
      if (data.payload) {
        reset({
          clientName: data.payload.firstName,
          clientSurname: data.payload.lastName,
          clientEmail: data.payload.email,
          clientPhone: data.payload.phoneNumber,
        });
      }
    });
  }, []);
  const navigate = useNavigate();
  const userLocation = useGeolocation();
  const onSubmit: SubmitHandler<addOrderFormValues> = async (values) => {
    try {
      //TODO сделать отправку данных через fetch
      const token = getToken();
      values.lng = userLocation.coordinates.lng;
      values.lat = userLocation.coordinates.lat;
      values.address = userAddress.data;
      if(routeInfo.status === 'loaded'){
        console.log('routeInfo:', routeInfo);
        values.distanceToClient = Math.round(routeInfo.data.distance / 1000);
      }
      console.log("values.distanceToClient: ", values.distanceToClient)
      const { data } = await instance.post("/orders", values, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const id = data.id;
      navigate(`/orders/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Ошибка при создании заказа!");
    }
  };
  return (
    <div className="addOrder">
      {isUserDataError ? (
        <></>
      ) : isUserDataLoading ? (
        <></>
      ) : (
        <AddOrderForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          control={control}
        />
      )}
    </div>
  );
};
