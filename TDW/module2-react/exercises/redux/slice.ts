import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, searchUsers } from "./requests";

const initialState = {
    status: 'default',
    users: {},
    search: {},
}

export const searchUsersAsync: any = createAsyncThunk(
    'github/searchUsers',
    async (params: { searchTerm: string, page: number }) => {
        const results = await searchUsers(params.searchTerm, params.page)

        if (results != null)
            return { results: results.data, total: results.total, searchTerm: params.searchTerm, page: params.page }
        else {
            return { results: null, total: null, searchTerm: null, page: null }
        }
    }
)

export const getUserAsync: any = createAsyncThunk(
    'github/getUser',
    async (login: string) => {
        const results = await getUser(login)

        return results
    }
)

export const slice = createSlice({
    name: 'github',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(searchUsersAsync.pending, (state: any) => {
                state.status = 'loading'
            })
            .addCase(searchUsersAsync.fulfilled, (state: any, action: any) => {
                if (action.payload != null) {
                    let search
                    const { results, total, searchTerm, page } = action.payload

                    if (state.search[searchTerm] == null) { // if there is not data for this search
                        search = []
                        search[page] = results
                        search[0] = total < 20 ? 1 : Math.ceil(total / 20);
                        state.search[searchTerm] = search
                    } else if (state.search[searchTerm][page] == null) { // if there is not data for this page
                        search = [...state.search[searchTerm]]
                        search[page] = results
                        state.search[searchTerm] = search
                    }

                    state.status = 'default'
                } else {
                    state.status = 'error'
                }
            })
            .addCase(searchUsersAsync.rejected, (state: any) => {
                state.status = 'error'
            })
            .addCase(getUserAsync.pending, (state: any) => {
                state.status = 'loading'
            })
            .addCase(getUserAsync.fulfilled, (state: any, action: any) => {
                if (action.payload == null)
                    state.status = 'error'
                else {
                    if (state.users[action.payload.login] == null) {
                        let newUser = {...action.payload.response}
                        newUser.repos = action.payload.repos
                        state.users[newUser.login] = newUser
                        state.status = 'default'
                    }
                }
            })
    }
})

export const selectUsers = (state: any) => state.github.users;
export const selectSearch = (state: any) => state.github.search;
export const selectStatus = (state: any) => state.github.status;

export default slice.reducer