// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Images
import Image from '../assets/avatar.png';

const About = () => {
  return (
    <>
      <Container>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{ fontWeight: 'bold', padding: 4, fontFamily: 'Poppins' }}
        >
          About me
        </Typography>
      </Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Card elevation={0} sx={{ maxWidth: 700, paddingTop: 1 }}>
            <CardMedia
              component="img"
              height="400"
              image={`${Image}`}
              alt="Profile Image"
              sx={{ objectFit: 'contain', paddingBottom: 1 }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={{ fontWeight: 'bold' }}
              >
                Augusto Forero
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ paddingBottom: 2 }}
              >
                {'> Programador con alma de gamer <'}
              </Typography>
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ paddingBottom: 1 }}
              >
                Tres cosas que he aprendido en Make It Real:
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1. La dedicación y la práctica son las mejores herramientas para
                aprender a programar.
                <br />
                2. La importancia de los fundamentos en una industria que
                evoluciona tan rápidamente.
                <br />
                3. La recursividad es esencial a la hora de resolver problemas.
                <br />
              </Typography>
              <br />
              <br />
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: 'bold', paddingBottom: 1 }}
              >
                a.forarc@gmail.com
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                align="center"
                sx={{ fontWeight: 'bold' }}
              >
                <Link
                  target="_blank"
                  href="https://github.com/augfor"
                  underline="none"
                >
                  GitHub
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
