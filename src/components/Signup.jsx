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

const Signup = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>Create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Enter your E-mail" />
        </CardContent>
        <CardContent>
          <Input placeholder="Enter your Password" />
        </CardContent>
        <CardContent>
          <Input placeholder="Confirm Password" />
        </CardContent>
        <CardFooter>
          <Button>
            {false ? <BeatLoader size={10} color="#FF6347" /> : "Signup"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
