import React from 'react'

export default function CostBreakdown({item, cost} : any) {
  return (
    <div className='flex justify-between py-1'>
      <span>{item}</span>

      <span className='font-bold'>{cost && `$${cost}`}</span>
    </div>
  );
}
