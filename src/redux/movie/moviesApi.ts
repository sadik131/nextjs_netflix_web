import { CreateMovie, Movie } from "@/utils"

export function fetchMovieApi(): Promise<{ data: Movie[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/movie")
        const data: Movie[] = await responce.json()
        resolve({ data })
    })
}

export function createMovieApi(movie: CreateMovie): Promise<{ data: Movie }> {
    console.log(movie)
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/movie", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(movie)
        })
        const data: Movie = await responce.json()
        resolve({ data })
    })
}

export function updateMovieApi({ update, id }: { update: CreateMovie, id: string }): Promise<{ data: Movie }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/movie/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(update)
        })
        const data: Movie = await responce.json()
        resolve({ data })
    })
}

export function deleteApi({ id }: { id: string }): Promise<{ data: Movie }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/movie/${id}`, {
            method: "DELETE"
        })
        const data: Movie = await responce.json()
        resolve({ data })
    })
}
