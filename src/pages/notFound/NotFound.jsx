import './NotFound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez est introuvable.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;
