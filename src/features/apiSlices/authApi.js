import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),

  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: (credentials) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: { user: { username: credentials.username }, token: 'fake-jwt-token' },
            });
          }, 1000);
        }),
    }),
    signup: builder.mutation({
      queryFn: (data) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: { user: { username: data.username }, token: 'fake-jwt-token' },
            });
          }, 1000);
        }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
