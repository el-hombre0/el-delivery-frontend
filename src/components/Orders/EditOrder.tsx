import { useForm } from "react-hook-form";
// import { useAppDispatch } from "../../hooks/useTypedDispatch";
// import { useEffect } from "react";
// import { fetchOneOrder } from "../../redux/slices/oneOrder";

export const EditOrder = () => {
    // const dispatch = useAppDispatch();

    const {
        handleSubmit,
        formState: { errors },      } = useForm({
        mode: "onChange",
      });
      const onSubmit = async (values: any) => {

      }
      // useEffect(() => {
      //   dispatch(fetchOneOrder())}, []);

    return (
        <div className="edit_order">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <label htmlFor="firstNameInput">Имя</label>
            {/* <input
              type="text"
              className="form-control"
              id="firstNameInput"
              {...register("firstName")}
              required
              placeholder={userFirstName}
            ></input> */}
            {/* {errors.firstName && <div>Ошибки</div>} */} 
          </div>
            </form>
        </div>
    )
}