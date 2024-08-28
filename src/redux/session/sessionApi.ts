import { CreateSession, SessionProp } from "@/utils"

export function calcSessionApi({ userId, endTime }: { endTime: number, userId: string }): Promise<{ data: SessionProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/user/session`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userId, endTime })
        })
        const data: SessionProp = await responce.json()
        resolve({ data })
    })
}

export function createSessionApi({ userId, startTime }: { startTime: number, userId: string }): Promise<{ data: SessionProp }> {
    return new Promise(async (resolve) => {
        const responce = await fetch(`/api/user/session`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userId, startTime })
        })
        const data: SessionProp = await responce.json()
        resolve({ data })
    })
}

