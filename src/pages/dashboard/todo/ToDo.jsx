import { useForm } from "react-hook-form"


const ToDo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data.name, data.email)
    const user = {
      name: data.name,
      email: data.email
    }
    const storage = localStorage.setItem("user", JSON.stringify(user))
    console.log(storage)
  }

  return (
    <div className="py-5 ml-3">
      <div className="flex flex-row-reverse justify-center gap-40">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="" className="text-xl">Name</label>
            <br />
            <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="Name" {...register("name", { required: true, minLength: 1, maxLength: 20 })} />
            {
              errors.name && <p className="text-rose-400">Name min length 1 character and   Name max length 20 character</p>
            }
          </div>
          <div>
            <label htmlFor="" className="text-xl">Email</label>
            <br />
            <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="Email" {...register("email")} />
          </div>
          

          <input className="btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value="SignUp" />
        </form>
        <h1>User Name: </h1>
        <p>User Email: </p>
      </div>
    </div>
  );
};

export default ToDo;