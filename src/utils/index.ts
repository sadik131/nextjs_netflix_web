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