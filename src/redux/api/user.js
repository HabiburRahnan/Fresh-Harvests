import { baseApi } from "../api/baseapi";


const authApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        // login
        login: build.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Auth"],
        }),

        // register
        register: build.mutation({
            query: (data) => {
                return {
                    url: "/users/register",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Auth", "Users"],
        }),
    })
})

export const {
    useLoginMutation, useRegisterMutation
} = authApi

