import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuTable } from './MenuTable';


const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState();
  
  const handleFilter = (e, value) => {
    setFilterValue(value)
  };

  return (
    <div className="px-2">
      
      <MenuTable/>
    </div>
  )
}

export default Menu