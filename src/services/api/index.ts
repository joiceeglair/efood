import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../../model/Restaurant/Restaurant'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getAllRestaurants: builder.query<Restaurant[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `/restaurantes/${id}`
    })
  })
})

export const { useGetAllRestaurantsQuery, useGetRestaurantByIdQuery } = api

export default api
