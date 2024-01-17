import { api } from '@/lib/axios'

export interface GetManagedRestaurant {
  id: string
  name: string
  createdAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurant>('/managed-restaurant')

  return response.data
}
