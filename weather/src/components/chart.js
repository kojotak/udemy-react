//simple component displaying some data... do not need class nor redux

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={120} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
}
