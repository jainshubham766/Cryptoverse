import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '66010bf85cmshc3faf34c8f80160p1230afjsn6800947f9eeb'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})
// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({baseUrl}),
//     endpoints:(builder) => ({
//       getCryptos: builder.query({
//         query:() => createRequest('/coins')
//       })
//     })
// });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  })
 });
export const { useGetCryptosQuery} = cryptoApi;

// To unserstand the working of 3rd party API watch video from 45:00 mins