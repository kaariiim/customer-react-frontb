import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Maserati() {
  return (
    <div className="maserati">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/Maserati-car-.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">-Maserati car-</CardTitle>
          <CardText>
            *Ce constructeur automobile italien est spécialisé dans les voitures
            de luxe, de sport et de courses. La marque fut fondée par les frères
            Maserati en 1914. Son logo est un trident qui est inspiré de la
            fontaine de Neptune de la ville de Bologne. Plusieurs fois rachetée
            puis revendue, notamment par Citroën en 1968, Maserati fera une
            coopération avec Chrysler avant d’être définitivement rachetée par
            Fiat. Afin de pouvoir profiter de la qualité des voitures de sports
            italiennes, il vous faudra tout de même débourser près de 100 000
            euros.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Maserati;
