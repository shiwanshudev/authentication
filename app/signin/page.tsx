import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <Card className="lg:w-2/12">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit">Login</Button>
          </form>
          <div className="text-center">
            <span className="py-2 text-zinc-500">Or</span>
            <form action="">
              <Button type="submit" className="block w-full">
                Login with Google
              </Button>
            </form>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-center w-full text-zinc-500">
            Dont have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
