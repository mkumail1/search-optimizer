import { urlExtract } from '../../util/helper';
import { useNavigate } from 'react-router-dom';
import './card.style.css';

const ResultCard = (props) => {
  const navigate = useNavigate();

  const { links, name, image_url: imageUrl, facebook_page_url } = props.data;

  const facebook = links
    ? links?.find((t) => t.type === 'facebook')
    : { url: facebook_page_url };

  return (
    <div
      className="card"
      data-testid="hello"
      onClick={() => navigate(`/${name?.toLowerCase()}/events`)}
    >
      <img src={imageUrl} alt="display" className="profile-image" />
      <div className="card-content">
        <h4>{name}</h4>
        {facebook.url && (
          <a href={facebook.url} target="_blank" rel="noreferrer">
            {urlExtract(facebook.url)}
          </a>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
