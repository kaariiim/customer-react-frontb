import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function MercedesBenz() {
  return (
    <div>
      <Card>
        <div className="mercedesbenz"></div>
        <CardBody>
          <CardTitle tag="h2">Mercedes Benz car</CardTitle>
          <CardText>
            *Mercedes-Benz est un constructeur allemand d’automobiles premiums,
            de sport et de luxe, mais également d’autocars et de camions. Malgré
            un lourd historique, notamment lors de la seconde Guerre Mondiale où
            la marque fut réquisitionnée afin de produire des véhicules pour
            l’armée allemande en exploitant travailleurs Français et
            Soviétiques, Mercedes est aujourd’hui une marque imposant une
            certaine classe et élégance. La gamme de Mercedes-Benz est vraiment
            très diversifiée, allant de l’utilitaire (Mercedes-Benz Citan) à des
            modèles bien plus sportifs et luxueux comme la fameuse Mercedes-Benz
            SLS AMG et son ouverture de portes papillon, qui est d’ailleurs
            semblable à celle de nos Cirrus SR 22 ! En bref, Mercedes-Benz reste
            un gage de qualité, avec une gamme très variée afin de toucher tous
            les utilisateurs.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default MercedesBenz;
