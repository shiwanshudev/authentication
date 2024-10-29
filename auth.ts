import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { User } from "./app/models/userModel";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "Credential",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password)
          throw new CredentialsSignin("Please provide both email and password");

        // Connect with DB here
        const user = await User.findOne({ email }).select("+password");
        if (!user || !user.password)
          throw new CredentialsSignin("Invalid email or password");

        const isMatch = compare(password, user.password);
        if (!isMatch) throw new CredentialsSignin("Invalid email or password");
        else return { name: user.name, id: user._id, email: user.email };
      },
    }),
  ],
});
