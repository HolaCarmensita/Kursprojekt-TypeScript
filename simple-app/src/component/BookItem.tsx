import { Booking } from '../types/Booking';

type BookItemProps = {
  booking: Booking;
};

function BookItem({ booking }: BookItemProps): JSX.Element {
  return (
    <div>
      <label htmlFor=''>
        <p>Name: {booking.owner}</p>
        <p>Date: {booking.date.getTime()}</p>
      </label>
    </div>
  );
}

export default BookItem;
