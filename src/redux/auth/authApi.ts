import { CreateUserData, FavoriteList, User } from "@/utils"

export function createUserApi(userinfo: CreateUserData): Promise<{ data: User }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userinfo)
        })
        const data: User = await responce.json()
        resolve({ data })
    })
}
export function fetchUserApi(): Promise<{ data: User[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user")
        const data: User[] = await responce.json()
        resolve({ data })
    })
}

export function makeAdminApi({ update, id }: { update: string, id: string }): Promise<{ data: User }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/user/${id}`, {
            method: 'PATCH',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(update)
        })
        const data = await responce.json()
        resolve({ data })
    })
}

export function deleteUserApi(id: string): Promise<{ data: User }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/user/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
        })
        const data = await responce.json()
        resolve({ data })
    })
}

export function deleteFevApi(id: string): Promise<{ data: FavoriteList }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/favorites/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
        })
        const data = await responce.json()
        resolve({ data })
    })
}

export function favoritesApi(): Promise<{ data: FavoriteList[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/favorites`)
        const data = await responce.json()
        resolve({ data })
    })
}

export function ToggleFavoriteApi(id: string): Promise<{ data: FavoriteList }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/favorites`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ id })
        })
        const data = await responce.json()
        resolve({ data })
    })
}