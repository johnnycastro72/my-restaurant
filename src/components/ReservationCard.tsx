import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/CustomerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid} from 'uuid'

interface ReservationCardTypes {
  name: string
  index: number
}

const ReservationCard = ({ name, index }: ReservationCardTypes): JSX.Element => {

  const dispatch = useDispatch();

  return (
    <div>
      <div onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
          id: uuid(),
          name,
          food: []
        }))
      }} className="reservation-card-container">{name}</div>
    </div>
  )
}

export default ReservationCard
