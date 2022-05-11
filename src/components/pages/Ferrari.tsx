import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Ferrari() {
  return (
    <div className="ferrari">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/Ferari-car.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Ferrari car</CardTitle>
          <CardText>
            *Ferrari, probablement la marque automobile la plus populaire et
            reconnue du monde, est fondée en 1929 par Enzo Ferrari. Enzo était
            lui-même un pilote de course pour Alpha Romeo lorsqu’il décida de
            lancer la Scuderia Ferrari. Le logo vient de la mère de Francesco
            Baracca, un pilote de l’aviation italienne qui avait peint un cheval
            cabré sur sa carlingue. En 1947 est créée la légendaire Ferrari 125
            S qui remportera le grand prix automobile de Rome en 1947. Tandis
            que la Avio Costruzioni 815 produite en 1940, restée dans l’ombre de
            la seconde guerre mondiale, participe toujours aujourd’hui à des
            courses d’autos de collection. Plus récemment, c’est le pilote de
            Formule 1 Michael Schumacher qui a permis de démocratiser la marque
            entre 1996 et 2006, où il obtint 72 victoires et 5 titres mondiaux
            sous l’étendard Ferrari. Vous pourrez faire l’acquisition d’une
            Ferrari Portofino neuve pour la maudite somme de 200 000 euros. Les
            prix grimpants jusqu’à 1,6 millions d’euros pour la Ferrari Monza.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Ferrari;
