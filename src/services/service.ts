import axios from 'axios'
import type { User } from "../common/interface"
import { BASE_URL } from "../common/constant";

const user = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export async function fetchUsers(): Promise<User[]> {
  const res = await user.get<User[]>('/users')
  return res.data
}