import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() =>
({
  root: {
    boxSizing: 'border-box',
    Width: '100%',
    margin: '10px 10px 0 10px',

  },
  media: {
    height: '110%',
    maxWidth: '280px',
    position: 'relative',
    left: '50%',
    transform: 'Translate(-50%)',
    padding: '16rem 0 0 0' // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
}));