import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Github from './Github';
import { Avatar } from '@mui/material';
import UserContext from './UserContext';
import ProfileClassesTable from './ProfileClassesTable';

function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 120,
      height: 120,
      fontSize: 40,

    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function Album() {

  const user = React.useContext(UserContext).value;

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main> 
        {/* Hero unit */}
        {/* If we have time, I want to create the effect of scrolling up and have the profile stick on top...? */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            horizontalAlign: 'middle',
            // verticalAlignalign: 'middle',
            marginTop: 10,
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 0,
            paddingBottom: 0,
            height: '100vh'
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            sx={{
              marginBottom: 5,
              
            }}
          >
            {user===null ? 
            <Avatar {...stringAvatar('Jed Watson')} /> : 
            <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)} />}
            
            <Stack
              direction="column"
              justifyContent="center"
              align="left"
            >
              <Typography
                component="h4"
                variant="h4"
                fontWeight="bold"
                color="text.primary"
              >
                {user===null ? 'Jed Watson' : `${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography
                component="h4"
                variant="h4"
                color="text.primary"
              >
                Software Engineering
              </Typography>
            </Stack>
          </Stack>
          <Github />
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <ProfileClassesTable />
          {/* End hero unit */}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

// old code (just in case if we need it at some time)
// {/* <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                   <CardMedia
//                     component="div"
//                     sx={{
//                       // 16:9
//                       pt: '56.25%',
//                     }}
//                     image="https://source.unsplash.com/random?wallpapers"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Heading
//                     </Typography>
//                     <Typography>
//                       This is a media card. You can use this section to describe the
//                       content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">View</Button>
//                     <Button size="small">Edit</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid> */}
