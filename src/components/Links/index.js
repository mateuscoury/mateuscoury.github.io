import React from 'react';

import { Pagina, Linkss } from './styled.js';
export default ({ rota, name }) => {
  return (
    <Linkss>
      <Pagina href={rota}>{name}</Pagina>
    </Linkss>
  );
};
