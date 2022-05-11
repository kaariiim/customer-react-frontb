import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Porsche() {
  return (
    <div className="porsche">
      <Card>
        <CardImg
          alt="Card image cap"
          src="//public/img/Picture-porsche.jpeg"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Porsche Car</CardTitle>
          <CardText>
            *Comment faire un classement des marques les plus luxueuses sans y
            inclure la mondialement connue Porsche. La marque allemande offre
            une gamme de voitures de luxe sportives. Le modèle le plus populaire
            est bien évidement la Porsche 911. La première génération de cette
            gamme date de 1964. Cinquante ans plus tard, le modèle phare de la
            marque garde toujours la même renommée et le même esthétisme. Une
            Porsche 911 d’occasion est aujourd’hui devenu très accessible, même
            si les modèles récents se vendent difficilement à moins de 100 000
            euros neufs. Porsche reste donc une marque offrant des voitures
            sportives haut de gamme, dont certains de ces modèles sont
            relativement accessibles.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export default Porsche;
