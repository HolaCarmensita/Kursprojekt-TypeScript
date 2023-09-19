import { Booking } from '../types/Booking';
import BookItem from './BookItem';

type BookListProps = {
  bookings: Booking[];
};

function BookList({bookings}: BookListProps): JSX.Element {
  return (
    <>
        {bookings.map(booking => <BookItem ...booking/>)}
    </>
  );
}

export default BookList;
