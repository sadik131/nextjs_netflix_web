import { ProfileProp } from "@/utils"

export function fetchProfilesApi(): Promise<{ data: ProfileProp[] }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user")
        const data: ProfileProp[] = await responce.json()
        resolve({ data })
    })
}

export function createProfileApi(info: ProfileProp): Promise<{ data: ProfileProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(info)
        })
        const data: ProfileProp = await responce.json()
        resolve({ data })
    })
}

export function deleteProfileApi({ id }: { id: string }): Promise<{ data: ProfileProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/user", {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(id)
        })
        const data: ProfileProp = await responce.json()
        resolve({ data })
    })
}