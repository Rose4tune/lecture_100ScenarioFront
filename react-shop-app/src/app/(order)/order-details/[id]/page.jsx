import React from 'react'

const OrderDetails = ({ params, searchParams }) => {
  const { id } = params;

  return (
    <div>OrderDetails {id}</div>
  )
}

export default OrderDetails