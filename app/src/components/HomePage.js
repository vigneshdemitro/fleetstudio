import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Card, CardContent, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomePage = () => (
  <Grid
    container
    direction='column'
    alignItems='center'
    justifyContent='center'
    style={{ minHeight: '100vh' }}
    spacing={2}
    >
    <Grid xs={12} textAlign='center'>
      <Card>
        <CardContent>Welcome to Git Commit Repo</CardContent>
      </Card>
    </Grid>
  </Grid>
)

export default HomePage;