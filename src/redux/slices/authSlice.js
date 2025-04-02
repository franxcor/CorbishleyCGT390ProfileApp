import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://web.ics.purdue.edu/~fcorbish/CGT390ProfileApp/logout.php`)
            const data = response.json();
            if (data.mesage) {
                return true;
            } else {
                return rejectWithValue(data.error());
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState : {
        isLogin: localStorage.getItem("isLogin") === "true" ? true : false,
    },
    reducers: {
        login: (state) => {
            isLogin = true;
            localStorage.setItem("isLogin", "true");
        }
    }
})

export const {login} = authSlice.actions;
export default authSlice.reducer;