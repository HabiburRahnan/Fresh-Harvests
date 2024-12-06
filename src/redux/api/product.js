import { baseApi } from "./baseapi";

const productApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (build) => ({
        // Fetch products
        getProduct: build.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
            providesTags: ["Products"], // Adjust tags based on your cache needs
        }),

        // Register user
        register: build.mutation({
            query: (data) => ({
                url: "/users/register",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Auth", "Users"], // Adjust tags as necessary
        }),
    }),
});

// Exports
export const { useGetProductQuery, useRegisterMutation } = productApi;
