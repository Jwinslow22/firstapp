import { Link } from 'react-router-dom';

import './MealCard.css';
import pages from '../../../utils/pages';

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <img className="meal-card-image" src={meal.image} alt={meal.name} />
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <Link to="/order"></Link>
        <Link to={pages.get('orderOnline').path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
      </article>
      )
      }