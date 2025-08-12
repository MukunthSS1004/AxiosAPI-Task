import axios from 'axios'
import type { User } from "../common/interface"
import { BASE_URL } from "../common/constant";

const user = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

export async function fetchUsers(): Promise<User[]> {
  try{
  const response = await user.get<User[]>('/users')
  return response.data
  } catch (error) {
    console.error("Error fetching users:", error)
    throw new Error("Failed to fetch users")
  }
}