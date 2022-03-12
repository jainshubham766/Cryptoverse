import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '785f6fbd62msh849a48de42e73fap168883jsn876be5357019'
}

//66010bf85cmshc3faf34c8f80160p1230afjsn6800947f9eeb
//785f6fbd62msh849a48de42e73fap168883jsn876be5357019
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;