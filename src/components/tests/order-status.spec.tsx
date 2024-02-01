import { render } from '@testing-library/react'

import { OrderStatus } from '../order-status'

describe('Order Status', () => {
  it('should display the right text based on order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const bagdeElement = wrapper.getByTestId('bagde')

    expect(statusText).toBeInTheDocument()
    expect(bagdeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text based on order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const bagdeElement = wrapper.getByTestId('bagde')

    expect(statusText).toBeInTheDocument()
    expect(bagdeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text based on order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    const bagdeElement = wrapper.getByTestId('bagde')

    expect(statusText).toBeInTheDocument()
    expect(bagdeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text based on order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const bagdeElement = wrapper.getByTestId('bagde')

    expect(statusText).toBeInTheDocument()
    expect(bagdeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text based on order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const bagdeElement = wrapper.getByTestId('bagde')

    expect(statusText).toBeInTheDocument()
    expect(bagdeElement).toHaveClass('bg-emerald-500')
  })
})
