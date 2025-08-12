import axios from 'axios'
import type { User } from "./../pages/UserPage/types"

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

export async function fetchUsers(): Promise<User[]> {
  const res = await api.get<User[]>('/users')
  return res.data
}