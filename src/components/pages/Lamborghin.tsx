import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Lamborghini() {
  return (
    <div className="lamborghini">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/lamborghini.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Lamborghini car</CardTitle>
          <CardText>
            *Vous avez entendu de l’orage alors que le ciel est dégagé ? Ne vous
            posez plus de question, c’est surement une Lamborghini Aventador au
            coin de la rue ! Lamborghini fut fondée en 1963 par Ferruccio
            Lamborghini. Tout d’abord spécialisée dans la construction de
            tracteurs dans une Italie d’après-guerre, Ferrucio Lamborghini fera
            fortune en l’espace de 10 ans. Le groupe Lamborghini se consacrera
            alors uniquement à la construction de voitures de luxe sportives de
            prestige. C’est en 1998 que le groupe Volkswagen racheta
            Lamborghini. Malgré une absence de la scène compétitive, les modèles
            350 GT et Huracan auront réussi à se hisser aux cotés des
            automobiles d’exception. Pour 180 000 euros vous aurez la
            possibilité de vous rendre au travail en Lamborghini Huracan. Pour
            une Aventador, il vous faudra débourser pas moins de 340 000 euros.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Lamborghini;
