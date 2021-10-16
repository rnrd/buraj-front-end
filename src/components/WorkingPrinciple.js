import React from 'react';
import {Row, Container,} from "reactstrap";

function WorkingPrinciple() {
    return (
      <div>
        <Container>
          <Row>
            <p>
              Kurp geometri algoritması, TCDD 3. Bölge Müdürlüğü tarafından
              konvansiyonel hatlarda yol tamiratı yapan buraj makinaları için
              üretilmiş bir algoritmadır.
            </p>
            <p>
              Algoritmayı kullanacak personelin demiryolu bilgisine sahip ve yol
              geometrisine hakim olması ön koşuldur.
            </p>
            <p>
              Kurp geometri algoritması hızlı tren hatlarında yapılacak
              tamiratlarda kullanılamaz.
            </p>
            <p>Algoritmaya, 11 metre ve üzeri kurp boyları girilmelidir.</p>
            <p>
              Developmanı 16 metreden kısa kurplar için kısa developmanlı kurp
              algoritması kullanılmalıdır. Bunun dışındaki algoritmalar 16
              metreden kısa developmanların hesabı için kullanılamaz.
            </p>
            <p>
              Algoritma, girilen kurp bilgilerine ait fleş grafiğini kullanıcıya
              sunmaktadır. Kullanıcı, girdiği kurp değerlerinin oluşturduğu fleş
              grafiğini mutlaka incelemelidir.
            </p>
            <p>
              Kullanıcı deneyimini iyileştirmek adına öneriler TCDD 3. Bölge
              Müdürlüğüne iletilmelidir.
            </p>
          </Row>
        </Container>
      </div>
    );
}

export default WorkingPrinciple;