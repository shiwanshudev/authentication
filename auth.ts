import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

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
      authorize: async ({ email, password }) => {
        if (!email || typeof email !== "string")
          throw new CredentialsSignin({ cause: "Email is not valid" });
        const user = { email, id: "1230" };
        if (password !== "passcode")
          throw new CredentialsSignin({ cause: "Password does not match" });
        else return user;
      },
    }),
  ],
});
