export interface User {
    id: string,
    name: string
    img?: string
    email: string
    role: "USER" | "ADMIN"
}

export interface UpdateUser {
    id?: string,
    name?: string
    img?: string
    email?: string
    role?: "USER" | "ADMIN"
}

export interface CreateUserData {
    name: string;
    email: string;
}

export interface Movie {
    id: string;
    title: string;
    description: string;
    thumbnail: string,
    age: number,
    duration: number,
    movieUrl: string,
    genre: string;
    release: string;
}

export interface ProfileProp {
    id: string
    userId: string
    name: string
    type: "CHILD" | "PARENT"
}

export interface FavoritesProps {
    id: string;
    title: string;
    thumbnail: string;
    release: string;
    description: string;
    genre: string;
    age: number,
    duration: number
    movieUrl: string;
    isFev: boolean;
}

export interface CreateSession {
    startTime: number
    endTime: number
}
export interface SessionProp {
    id: string
    userId: string
    startTime: number
    endTime: number
    duration: number
}

export interface CreateMovie {
    title: string;
    description: string;
    thumbnail: string,
    movieUrl: string,
    genre: string;
    release: string;
    age: number | string;
    duration: number | string
}

export interface MoviesState {
    movies: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface EditMovieModalProps {
    movie?: Movie;
    onSave?: (movie: Movie) => void;
    onCreate?: (movie: Movie) => void;
    onClose: () => void;
}

export interface FavoriteList {
    id: string;
    movieId: string;
    userId: string;
    movie: Movie;
}