import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginImage from "../../assets/login-image.png";
import Logo from "../../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";
import { ButtonLongPurple } from "../../component/Button";
import { LongInputWithPlaceholder } from "../../component/Inputs";
import { Heading, Text } from "../../component/Texts";
import { Label } from "../../component/Label";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../feature/authentication";
import { showToast } from "../../component/showToast";
import { RootState, AppDispatch } from "../../store";

// Define form inputs interface
interface LoginFormInputs {
  email: string;
  password: string;
}

// Define the Yup validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const UserLogin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); 
  const { isLoading,  } = useSelector((state: RootState) => state.auth);

  // Set up the form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      // Dispatch the login action
      const resultAction = await dispatch(
        userLogin({
          email: data.email,
          password: data.password,
        })
      );

      if (userLogin.rejected.match(resultAction)) {
        // Login failed, access the payload from the rejected action
        const errorPayload = resultAction.payload as string;
        showToast(errorPayload, "error");
      } else if (userLogin.fulfilled.match(resultAction)) {
        // Login was successful
        showToast(resultAction.payload.message, "success");
        navigate("/connect");
      }
    } catch (error) {
      // Handle unexpected errors, such as network issues
      showToast("An unexpected error occurred. Please try again.", "error");
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-ter1 font-body">
      <div className="w-full max-w-4xl mx-4">
        <div className="flex flex-col lg:flex-row bg-primary1 rounded-lg shadow-lg overflow-hidden my-20">
          <div className="hidden lg:block lg:w-1/2 bg-cover px-10 py-20">
            <img src={LoginImage} alt="Login" />
          </div>

          <div className="w-full lg:w-1/2 p-8">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[73px] lg:w-[73px]" />
            </Link>

            <Heading
              level={3}
              className="mb-4 mt-7 font-semibold text-primary4"
              size="3xl"
            >
              Welcome Back
            </Heading>

            <Text className="mb-6" color="sec6">
              Sign in to continue
            </Text>

            <form className="mt-12" 
            onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email Field */}
              <div className="mb-4">
                <Label
                htmlFor="email"
                children="Email"
                />
                <LongInputWithPlaceholder
                  type="email"
                  placeholder="johndoe@mail.com"
                  className={`mt-2 focus:ring-1 focus:ring-purple-600 ${
                    errors.email ? "border-sec8" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="mb-4">
                 <Label
                htmlFor="password"
                children="Password"
                />
                <LongInputWithPlaceholder
                  type="password"
                  placeholder="••••••••"
                  className={`mt-2 focus:ring-1 focus:ring-purple-600 ${
                    errors.password ? "border-sec8" : ""
                  }`}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Text className="mt-16 mb-5 text-center text-gray-600">
                Don't have an account?{" "}
                <Link to="/auth/register" className="text-purple-600 hover:underline">
                  Sign Up
                </Link>
              </Text>

               {isLoading ? ( 
                 <ButtonLongPurple
                  className="w-full opacity-50"
                  type="submit"
                  disabled
                >
                  Logging In...
                </ButtonLongPurple>
              ) : ( 
                <ButtonLongPurple className="w-full" type="submit">
                  Login
                </ButtonLongPurple>
               )} 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
