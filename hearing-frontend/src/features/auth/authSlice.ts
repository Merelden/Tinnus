import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.REACT_APP_API_URL!;

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({
        email,
        password,
        full_name,
        age,
        agreed,
    }: {
        email: string;
        password: string;
        full_name: string;
        age: number;
        agreed: boolean;
    }) => {
        const res = await fetch(`${API_URL}/auth/register/`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, full_name, age, agreed }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData?.error || 'Registration failed');
        }

        return await res.json(); // { message, profile, is_new }
    }
);

export const checkUserSession = createAsyncThunk(
    'auth/checkUserSession',
    async () => {
        const res = await fetch(`${API_URL}/auth/me/`, {
            method: 'GET',
            credentials: 'include',
        });

        if (!res.ok) throw new Error('Session check failed');

        const data = await res.json();

        if (!data.authenticated) throw new Error('Not authenticated');

        return data; // { authenticated: true, email, full_name, age, agreed, days_passed }
    }
);

interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    profile: {
        email: string;
        full_name: string;
        age: number | null;
        agreed: boolean;
    } | null;
    isNewUser: boolean;
    daysPassed: number | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    loading: false,
    error: null,
    profile: null,
    isNewUser: false,
    daysPassed: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Registration / login
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.profile = action.payload.profile;
                state.isNewUser = action.payload.is_new;
                state.daysPassed = null; // ещё нет инфы
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Registration failed';
            });

        // Session check
        builder
            .addCase(checkUserSession.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkUserSession.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.profile = {
                    email: action.payload.email,
                    full_name: action.payload.full_name,
                    age: action.payload.age,
                    agreed: action.payload.agreed,
                };
                state.daysPassed = action.payload.days_passed ?? null; // ✅ правильный доступ
            })
            .addCase(checkUserSession.rejected, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.profile = null;
                state.daysPassed = null;
            });
    },
});

export default authSlice.reducer;
