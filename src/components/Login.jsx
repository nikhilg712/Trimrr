import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./Error";
import { useState,useEffect } from "react";
import * as Yup from "yup";
import useFetch from "@/hooks/useFetch";
import { login } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, loading, error, fn:fnLogin } = useFetch(login);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  useEffect(() => {
    if(error===null&& data){
      navigate(`/dashboard?${longLink?`createNew=${longLink}`:""}`)
    }
  }, [data,error])
  

  const handleLogin = async () => {
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid Email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Password is required"),
      });
      await schema.validate(formData, { abortEarly: false });
      await fnLogin(formData.email, formData.password);
    } catch (error) {
      const newErrors = {};
      error?.inner?.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

 

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>If you already have an account</CardDescription>
          {error&&<Error message={error.message}/>}
        </CardHeader>
        <CardContent>
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter your E-mail"
          />
          {errors.email && <Error message={errors.email} />}
        </CardContent>
        <CardContent>
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Enter your Password"
          />
          {errors.password && <Error message={errors.password} />}
          
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>
            {loading ? <BeatLoader size={10} color="#FF6347" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
