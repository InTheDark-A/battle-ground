import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ApiFirst = createApi({
    reducerPath: "app",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query({
            query: () => ({
                url: `/posts`
            })
        })
    })
})

export const ApiNumber = createApi({
    reducerPath: "numApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://numbersapi.com"}),
    endpoints: (builder) => ({
        getFact: builder.query({
            query: (number) => {
                return ({
                    url: `/${number}`,
                    responseHandler: (response) => response.text()
                })
            },
        })
    })
})

export const ApiAnimals = createApi({
    reducerPath: "animalsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://aws.random.cat"}),
    endpoints: (builder) => ({
        getPicture: builder.query({
            query: _ => ({
                url: `/meow`,
            })
        })
    })
})
