import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const isCorrectCredentials = (credentials) =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD;

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Credentials({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "admin",
          value: "admin",
        },
        password: { label: "Password", type: "password", value: "admin" },
      },
      authorize: async (credentials) => {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: "Dolly" };
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    redirect: async (url, _) => {
      return Promise.resolve(url);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
