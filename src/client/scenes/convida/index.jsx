import React from 'react';

// COMPONENTS
import Highlight from '../../components/highlight';

// Convida Images
import Convida1 from '../../assets/backgrounds/Convida1.png';
import Convida2 from '../../assets/backgrounds/Convida2.png';
import Convida3 from '../../assets/backgrounds/Convida3.png';
import Convida4 from '../../assets/backgrounds/Convida4.png';

// Style
import './index.scss';

const fakeConvida = (id) => [{
  id: 1,
  title: 'Coletivo Central - Marcos Pagu',
  image: Convida1,
}, {
  id: 2,
  title: 'Coletivo Central - Marcos Pagu',
  image: Convida2,
}, {
  id: 3,
  title: 'Coletivo Central - Marcos Pagu',
  image: Convida3,
}, {
  id: 4,
  title: 'Coletivo Central - Marcos Pagu',
  image: Convida4,
}].filter(convida => convida.id.toString() === id)[0]


export default () => (
  <div className="convida">
  </div>
);