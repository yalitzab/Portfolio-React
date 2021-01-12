import React from 'react';
import imageUrl from '../../assets/large/projects';

function Portfolio(props) {
  const { cards } = props;
  return (
    <div className="row">
      {cards.map(card => {
        return (
          <div className="col-md-3 mb-4">
          
              <img src={card.imageUrl} className="card-img-top w-100  h-80" alt="..." />
              <h3 class="text-justify">{card.title}</h3>
              <a class="btn btn-primary ml-5 mt-3" href={card.deployLink} role="button">Deployed</a>
              <a class="btn btn-primary ml-5 mt-3" href={card.gitHubRepo} role="button">GitHub</a>
      
          </div>
        )
      })}

    </div>
  );
}
export default Portfolio;
