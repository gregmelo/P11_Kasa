import { useParams } from 'react-router-dom';
import logements from '../../data/logements';
import './HousingDetails.scss';

function HousingDetails() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <div className="housing-details">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
    </div>
  );
}

export default HousingDetails;
