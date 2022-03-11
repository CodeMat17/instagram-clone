import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import ClientPromise from "../../../lib/mongodb";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(ClientPromise),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
});
