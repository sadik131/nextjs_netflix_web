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
    movieUrl: string,
    genre: string;
    release: string;
}

export interface CreateMovie {
    title: string;
    description: string;
    thumbnail: string,
    movieUrl: string,
    genre: string;
    release: string;
}

export interface MoviesState {
    movies: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}


// export interface UpdateMovie {
//     id?: string;
//     title?: string;
//     description?: string;
//     thumbnail?: string,
//     movieUrl?: string,
//     genre?: string;
//     release?: string;
// }

export interface EditMovieModalProps {
    movie?: Movie;
    onSave?: (movie: Movie) => void;
    onCreate?: (movie: Movie) => void;
    onClose: () => void;
}