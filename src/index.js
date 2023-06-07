
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './utils';
import BookingForm from './components/BookingForm';
import pages from './Pages';

const updateTimes = (availableTimes, bookingDate) => {
const response = fetchAPI(new Date(bookingDate));
const updateTimes = (availableTimes, date) => {
const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};
}
const initializeTimes = initialAvailableTimes => {
const Bookings = () => {
  const [
    availableTimes,
    dispatchOnBookingDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = formData => {
  const onSubmit = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/booking-confirmation');
    if (response) navigate(pages.get('confirmedBooking').path);
  };
return (
  <div className="container">
  <div className="bookings">
    <h2>Table reservation</h2>
    <BookingForm
      availableTimes={availableTimes}
      dispatchOnBookingDateChange={dispatchOnBookingDateChange}
      submitForm={submitForm}
      dispatchOnDateChange={dispatchOnDateChange}
      onSubmit={onSubmit}
    />
  </div>
  </div>
);
}
}
}
