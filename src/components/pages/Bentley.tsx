import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function Bentley() {
  return (
    <div className="bentley">
      <Card>
        <CardImg
          alt="image"
          src="//public/img/Bentley-car.avif"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Bentley car</CardTitle>
          <CardText>
            *C’est maintenant que l’on va rentrer dans le vif du sujet… Bentley,
            crée en 1919 à Crklewood, au Nord de Londres est devenue l’un des
            marques d’automobile les plus reconnue du monde grâce à ses
            nombreuses victoires lors du 24 Heures du Mans en 1924, 1927, 1928,
            1929 et 1930. Des modèles proéminent témoignent de la domination
            historique de Bentley en matière de course automobile comme la
            Bentley 4 1/2 litre, la Bentley R Type Continental ou encore la
            Bentley Turbo R. Aujourd’hui, Bentley propose une gamme de berlines
            et de SUV luxueux. Pour la maudite somme de 200 000 euros, vous
            pourrez vous offrir une Bentley Continental. Néanmoins, vous ne
            pourrais plus avoir d’excuse pour ne pas arriver à l’heure à vos
            rendez-vous lorsque vous conduirez ce mastodonte de 5 mètres de long
            et de 2500 kg, propulsé par plus de 550 chevaux.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Bentley;
