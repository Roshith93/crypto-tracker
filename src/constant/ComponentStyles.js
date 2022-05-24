import { makeStyles } from '@mui/styles'

import images from './index'

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#141618',
    color: 'white',
    minHeight: '100vh',
  },
  navBarTitle: {
    flex: 1,
    color: 'gold',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  bannerImg: {
    backgroundImage: `url(${images.banner})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  bannerTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    // fontFamily: 'Montserrat',
    color: 'white',
  },
  bannerSubTitle: {
    color: 'white',
    textTransform: 'capitalize',
    // fontFamily: 'Montserrat',
  },
  tagLine: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bannerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  carouselBody: {
    height: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: 'white',
  },
  tableRow: {
    cursor: 'pointer',
  },
  cpContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  cpSidebar: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey',
  },
  cpDescription: {},
  cpHeading: {},
}))
