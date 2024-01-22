import { api } from '@/lib/axios'

interface DeliverOrderResponse {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderResponse) {
  await api.patch(`/orders/${orderId}/deliver`)
}
