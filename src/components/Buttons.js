import * as React from 'react'
import Button from '@mui/material/Button'

export const BasicButtons = ({ keys, val, onClick, isSelected }) => {
  return (
    <span>
      <Button
        variant='contained'
        onClick={onClick}
        key={keys}
        selected={isSelected}
        style={{ backgroundColor: `${isSelected ? ' #1077dd' : '#e1d00a'}` }}
      >
        {val}
      </Button>
    </span>
  )
}
