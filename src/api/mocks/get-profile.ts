import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John doe',
      email: 'johndoe@example.com',
      phone: '19233221332',
      role: 'manager',
      createdAt: new Date(),
    })
  },
)
