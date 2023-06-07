import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import BookingForm from '../components/BookingForm';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';

const updateTimes = (availableTimes, bookingDate) => {
const response = fetchAPI(new Date(bookingDate));
const updateTimes = (availableTimes, date) => {
const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];
};

const Bookings = (dispatchOnBookingDateChange, dispatchOnDateChange) => {
const availableTimes = useReducer(updateTimes, [], initializeTimes);
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
};
  };

  export default Bookings;
