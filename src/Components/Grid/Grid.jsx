import React from 'react'
import "./Grid.css"
import { useCallback,useMemo } from 'react';

import { Coloumn } from '../Coloumn/Coloumn';


export const Grid = ({ gridData, grouping, userIdToData })=> {
  const keys = useMemo(() => Object.keys(gridData), [gridData]);
  return (
    <div className='grid'>
    {keys.map((k) => <Coloumn key={k} tickets={gridData[k]} grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
</div>

  )
}
