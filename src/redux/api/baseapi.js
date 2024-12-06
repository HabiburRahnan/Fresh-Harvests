import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import baseApiHandler from "../../utils/baseApiHandler";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api-fresh-harvest.code-commando.com/api/v1`,
        prepareHeaders: (headers,) => {
            // const token = (getState()).auth.token;
            const token = localStorage.getItem("token")
            if (token) {
                headers.set("authorization", `${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ["User", "Product"],
});