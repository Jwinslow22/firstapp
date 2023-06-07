import { Link } from 'react-router-dom';

import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import restaurantFoodImage from '../assets/restaurant-food.jpg';
import pages from '../../../utils/pages';

const Hero = () => {
    return (
        <><p>We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
        </p><div>
                <Link className="button-primary" to="/bookings"></Link>
                <Link className="button-primary" to={pages.get('bookings').path}>
                    Reserve a table
                </Link>
            </div></>)
    }