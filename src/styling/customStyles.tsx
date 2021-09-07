import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const searchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '50rem',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export const feedStyles = makeStyles({
  tweet: {
    '&hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
    },
  },
  tweeterImage: {
    alignSelf: 'start',
    marginTop: '0.55rem',
  },
});
