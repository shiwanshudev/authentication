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

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <Card className="lg:w-2/12">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col gap-4">
            <Input placeholder="Name" type="name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="text-center">
            <span className="py-2 text-zinc-500">Or</span>
            <form action="">
              <Button type="submit" className="block w-full">
                Sign In with Google
              </Button>
            </form>
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-center w-full text-zinc-500">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
