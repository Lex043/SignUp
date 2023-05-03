import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import signUpImg from "../assets/DrawKit-daily-life-vector-illustration-01 1.png";

const validationSchema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().min(1, { message: "E-mail is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema) });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
    navigate("/success", { replace: true });
  };

  return (
    <section className="pt-4 px-5 pb-6">
      <h1 className="text-center text-2xl font-mono font-semibold">Sign Up</h1>
      <header className="bg-white mt-6 rounded-2xl pb-6 md:flex md:flex-row-reverse md:items-center">
        <img
          src={signUpImg}
          alt="Sign Up"
          className="w-full mx-auto md:w-[50%]"
        />
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-10 px-4 md:w-[50%]"
        >
          <label htmlFor="fullName" className="font-mono">
            Full Name
          </label>
          <input
            {...register("fullName")}
            className="border-b-2 outline-none"
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs">
              {errors.fullName?.message}
            </span>
          )}
          <label htmlFor="E-mail" className="font-mono">
            E-mail
          </label>
          <input
            {...register("email")}
            type="email"
            className="border-b-2 outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">
              {" "}
              {errors.email?.message}
            </span>
          )}
          <label htmlFor="password" className="font-mono">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="border-b-2 outline-none"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {" "}
              {errors.password?.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-[#F9C543] text-white w-[100px] py-2 rounded-3xl"
            onClick={handleSubmit(onSubmit)}
          >
            sign up
          </button>
        </form>
      </header>
    </section>
  );
};

export default SignUp;
