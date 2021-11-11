import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    quotes: [
        {
            quote: "Ваня тупо цирк пожилой, шо сказатб",
            author: "Кирилл Нестеров",
            likes: 0,
            id:0,
        },
        {
            quote: "Просто деффки тупые и не люди",
            author: "Полина Свяжина",
            likes: 0,
            id:1,
        },
        {
            quote: "У нас змеиный коллектив",
            author: "Лена Васясина",
            likes: 0,
            id:2,
        },
        {
            quote: "Это что ещё за полупокер ?",
            author: "Максим Добровольский",
            likes: 0,
            id:3,
        },
        {
            quote: "ХОХЛЫ",
            author: "Неизвестный мыслитель",
            likes: 0,
            id:4,
        },
        {
            quote: "Чупапи муняня",
            author: "Артур Шагиахметов позаимствовал из интернета",
            likes: 0,
            id:5,
        },
        {
            quote: "Мальчик, ты дурак ?",
            author: "Юрий Окуловский",
            likes: 0,
            id:6,
        },
        {
            quote: "Мальчик, ты дурак ?",
            author: "Юрий Окуловский",
            likes: 0,
            id:7,
        },
        {
            quote: "Все радисты с детства знают 3йку самых важных слов.РТФ, УРФУ, ПОПОВ",
            author: "???",
            likes: 0,
            id:8,
        },
        {
            quote: "Фактически получается",
            author: "Шадрин",
            likes: 0,
            id:9,
        },
        {
            quote: "Черт знает, я плита",
            author: "Артур Шашахметов",
            likes: 0,
            id:10,
        },
        {
            quote: "Я average enjoyer div, button, a и обязательно br",
            author: "Артур Шагиахметов",
            likes: 0,
            id:11,
        },
        {
            quote: "Woman moment",
            author: "Булат Валиев",
            likes: 0,
            id:12,
        },
    ] as Array<Quote>,
    yourSuggested: [
        {}
    ]
}


export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        likeQuote(state, action: PayloadAction<Quote>) {
            state.quotes = state.quotes.map((e) => e.id === action.payload.id ? {...action.payload, likes: action.payload.likes + 1} : e);
        },

    },
    extraReducers: {
        // [fetchFiles.fulfilled.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload;
        // },
        // [fetchFiles.pending.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload;
        // },
        // [fetchFiles.rejected.type]:(state, action:PayloadAction) => {
        //     state.some = action.payload
        // },
    }
});

type Quote = {
    author: string | null,
    quote: string,
    likes: number,
    id: number
}


export default appSlice.reducer;