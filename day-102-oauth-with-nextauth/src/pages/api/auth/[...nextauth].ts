import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import FaceBookProvider from "next-auth/providers/facebook"



export const authOptions: NextAuthOptions = {
    providers: [

        FaceBookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })

    ]
}

export default NextAuth(authOptions)
