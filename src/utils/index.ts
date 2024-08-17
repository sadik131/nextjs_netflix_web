export interface User {
    id: string,
    name: string
    email: string
    role: "USER" | "ADMIN"
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

export interface FavoritesProps {
    id: string;
    title: string;
    thumbnail: string;
    release: string;
    description: string;
    genre: string;
    movieUrl: string;
    isFev: boolean;
    remove?: (id: string) => void;
}


export interface CreateMovie {
    title: string;
    description: string;
    thumbnail: string,
    movieUrl: string,
    genre: string;
    release: string;
    age: number |string;
    duration: number |string
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
    id: string
    movieId: string
    userId: string
}