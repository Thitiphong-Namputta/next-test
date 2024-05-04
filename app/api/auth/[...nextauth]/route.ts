import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import config from "../../../../config";

const handler = NextAuth({
  pages: {
    signIn: "/auth/sigin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentails",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("start")
        const res = await fetch(`${config.apiUrl}/auth/login/`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
            "Authorization":"Token 473c04f302c71b6d113cb607a52369237dd5232f"
          },
        });
        const response = await res.json();
        console.log(response)
        if (response) {
          console.log("response", res);
          return response;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
