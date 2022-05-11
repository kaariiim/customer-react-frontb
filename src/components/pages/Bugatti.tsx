import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Bugatti() {
  return (
    <div className="bugatti">
      <Card>
        <div className="bugatti"></div>
        <CardBody>
          <CardTitle tag="h5">Bugatti car</CardTitle>
          <CardText>
            *Bugatti Automobiles est un constructeur automobile français, fondée
            en 1909 par le constructeur franco-italien Ettore Bugatti à
            Molsheim, en Alsace. Ces automobiles étaient cotées pour leur beauté
            et leurs performances sur circuit. Les Bugattis qui marquèrent
            l’histoire furent la Type 30 Grand Prix, la Type 41 Royale, la Type
            57 Atlantique et la Type 55 sports car. Après la mort de Ettore
            Bugatti en 1947, la marque fit faillite avant d’être remise sur les
            rails en 1950 par un riche entrepreneur italien. La marque est
            aujourd’hui détenue par le groupe Volkswagen AG. Envie de faire
            tourner des têtes quand vous roulez en centre-ville ? Cette voiture
            est faite pour vous ! Il sera néanmoins bien difficile de trouver
            une Bugatti Veyron pour moins d’un million d’euros. Quant à la
            Chiron, elle vous reviendra à 2,5 millions d’euros, mais vous
            assurera une accélération unique au monde avec pas moins de 1500
            chevaux sous le capot.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Bugatti;
