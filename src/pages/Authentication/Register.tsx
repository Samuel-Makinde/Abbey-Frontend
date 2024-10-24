

import React, {useState, useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginImage from "../../assets/react.svg";
import Logo from "../../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";
import { ButtonLongPurple } from "../../component/Button";
import { LongInputWithPlaceholder } from "../../component/Inputs";
import { Heading, Text } from "../../component/Texts";
import { Country, State } from "country-state-city";
import { LabelImportant } from "../../component/Label";

// Define form inputs interface
interface RegisterFormInputs {
  fullName: string;
  userName: string;
  bio: string;
  country: string;
  state: string;
  email: string;
  password: string;
}

// Define the Yup validation schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  userName: yup.string().required("Username is required"),
  bio: yup.string().required("Your bio is required"),
  country: yup.string().required("Your country is required"),
  state: yup.string().required("Your state is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const UserRegister: React.FC = () => {
//   const navigate = useNavigate();

  // Set up the form with react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

    const [countries, setCountries] = useState<ReturnType<typeof Country.getAllCountries>>([]);
  const [states, setStates] = useState<ReturnType<typeof State.getStatesOfCountry>>([]);


 const selectedCountry = watch("country"); // Watch the country value
  const selectedState = watch("state"); // Watch the state value

  useEffect(() => {
    const countriesList = Country.getAllCountries();
    setCountries(countriesList);

    // If country is not set, use default country (Nigeria)
    if (!selectedCountry) {
      setValue("country", "NG");
    } else {
      setValue("country", selectedCountry);
    }

    // Set states based on selected country
    const defaultCountryStates = State.getStatesOfCountry(selectedCountry || "NG");
    setStates(defaultCountryStates);

  }, [selectedCountry, setValue]);


   const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = event.target.value;
    setValue("country", countryCode);
    
    // Fetch states based on selected country
    const selectedStates = State.getStatesOfCountry(countryCode);
    setStates(selectedStates);
    setValue("state", ""); // Reset state value when country changes
  };

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    // Handle registration logic here
    console.log(data); // For demonstration; replace with actual registration logic
    // navigate("/next-step"); // Redirect after successful registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-body">
      <div className="w-full max-w-4xl mx-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden my-20">
          <div className="hidden lg:block lg:w-1/2 bg-cover px-10 py-20">
            <img src={LoginImage} alt="Register" />
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
              Create an Account
            </Heading>

            <Text className="mb-6" color="sec6">
              Sign up to get started
            </Text>

            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
              {/* Full Name Field */}
              <div className="mb-4">
                <LabelImportant
                htmlFor="fullName"
                children="Full Name"
                />
                <LongInputWithPlaceholder
                  type="text"
                  placeholder="John Doe"
                  className={`mt-2 focus:ring-1 focus:ring-purple-600 ${
                    errors.fullName ? "border-sec8" : ""
                  }`}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Username Field */}
              <div className="mb-4">
                 <LabelImportant
                htmlFor="userName"
                children="UserName"
                />
                <LongInputWithPlaceholder
                  type="text"
                  placeholder="johndoe123"
                  className={`mt-2 focus:ring-1 focus:ring-purple-600 ${
                    errors.userName ? "border-sec8" : ""
                  }`}
                  {...register("userName")}
                />
                {errors.userName && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </div>

              {/* Bio Field */}
              <div className="mb-4">
                <LabelImportant
                htmlFor="bio"
                children="Bio"
                />
                <LongInputWithPlaceholder
                  type="text"
                  placeholder="Tell us about yourself..."
                  className={`mt-2 focus:ring-1 focus:ring-purple-600 ${
                    errors.bio ? "border-sec8" : ""
                  }`}
                  {...register("bio")}
                />
                {errors.bio && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div className="mb-4 w-full">
                 <LabelImportant
                htmlFor="country"
                children="Country"
                />
                <select
        id="country"
        {...register("country")}
        onChange={handleCountryChange}
        className="mt-2 w-full border  focus:ring-purple-600 rounded p-2 outline-none"
        defaultValue="NG"
      >
        {countries.map(country => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      {errors.country && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>

              {/* State Field */}
              <div className="mb-4 w-full">
                 <LabelImportant
                htmlFor="state"
                children="State"
                />
                <select
        id="state"
        {...register("state")}
        className="mt-2 w-full border outline-none rounded p-2"
        value={selectedState}
      >
        {states.map(state => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>
                {errors.state && (
                  <p className="text-sec8 text-sm mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <LabelImportant
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
                 <LabelImportant
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
                Already have an account?{" "}
                <Link to="/" className="text-purple-600 hover:underline">
                  Log In
                </Link>
              </Text>

              <ButtonLongPurple className="w-full" type="submit">
                Sign Up
              </ButtonLongPurple>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;


