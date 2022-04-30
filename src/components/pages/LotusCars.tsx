import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function LotusCars() {
  return (
    <div className="lotus cars">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/Lotus-car-.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Lotus car</CardTitle>
          <CardText>
            *Lotus est un constructeur automobile anglais de voitures de luxe
            sportives et de course. Il est assez rare de voir une Lotus dans la
            rue, mais lorsqu’on en voit une, on est sûr de la remarquer ! Lotus
            propose des modèles sportifs compacts, comme la fameuse Lotus Elise
            ou encore la Lotus Evora. Il existe également de nombreux modèles
            très prisés par les collectionneurs comme la Lotus Excel, tout droit
            sortie d’une série de science-fiction des années 80 et qui ressemble
            beaucoup à la Pontiac (K.I.T.T.) de K2000 ! Ses phares escamotables
            lui donnent une touche old school. Lotus Cars est basé sur
            l’ancienne base aérienne de la RAF, Hethel située à Northfolk. Nous
            avons d’ailleurs déjà emmené des passagers visiter Lotus Cars !
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default LotusCars;
