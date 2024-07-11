import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uspApi = createApi({
  reducerPath: "uspApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({baseUrl:"http://31.220.31.112:4010/api/"}), // set This to  env variable
  // baseQuery: fetchBaseQuery({baseUrl:"https://qfrg768k-4000.uks1.devtunnels.ms/api/"}), // set This to  env variable
  endpoints: (builder) => ({
    joinAffiliate:builder.mutation<any,any>({
      query:(data)=>({
        url:"join-affiliate/create",
        method:"POST",
        body:data,
        
      })
    }),
    joinVip:builder.mutation<any,any>({
      query:(data)=>({
        url:"vip-program/create",
        method:"POST",
        body:data,
      })
    })
  }),
});

export const {
  useJoinAffiliateMutation,
  useJoinVipMutation
} = uspApi;
