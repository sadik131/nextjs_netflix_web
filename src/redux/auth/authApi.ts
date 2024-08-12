import { CreateUserData, User } from "@/utils"

export function createUserApi(userinfo: CreateUserData): Promise<{ data: User }> {
    return new Promise(async (resolve) => {
        const responce = await fetch("/api/auth", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userinfo)
        })
        const data: User = await responce.json()
        resolve({ data })
    })
}
