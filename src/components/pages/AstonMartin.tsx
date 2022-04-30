import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function AstonMartin() {
  return (
    <div className="astonmartin">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/Aston-Martin-car-.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Aston Martin</CardTitle>
          <CardText>
            *Comment ne pas connaitre cette marque Britannique largement mise en
            avant dans les films de James Bond. En 1913, le pilote Lionel Martin
            confectionna une voiture afin de participer à la course d’Aston
            Clinton dont il fut le vainqueur en 1914. La fusion des deux noms
            donna “Aston Martin”. Le logo vient quand a lui du dieu égyptien
            Khépri, symbolisé par un scarabée. Aston Martin représente le mix
            parfait entre voiture élégante et rapide. A vous de choisir votre
            préférée entre la Aston Martin Vantage, la Rapide ou encore la DB11,
            descendante de la DB5 qui fut le premier modèle à apparaitre dans
            James Bond Goldfinger en 1964. Simple précision, votre Aston Martin
            ne tirera malheureusement pas de missiles sur les méchants.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default AstonMartin;
