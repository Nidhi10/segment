import React, {useEffect, useState} from 'react';
import Attribute from './attribute';
import CustomOperator from './customOperator';
import Value from './value';
import Grid from '@mui/material/Grid';



function Segment () {
  return (
    <Grid container spacing={2}>
        <Attribute />
        <CustomOperator />
        <Value />
    </Grid>
  )
}

export default Segment