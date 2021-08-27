import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { IDrawerProps } from '../Interfaces';

export const sidebarStyles = makeStyles({
  drawer: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden',
  },
  drawerPaper: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden',
    background: 'transparent',
    marginLeft: '60px',
    borderRight: '1px solid #182c38',
  },
  listItemIconPadding: {
    display: 'block',
    minWidth: 0,
    padding: '0.25rem',
  },
  iconSize: {
    fontSize: '1.25rem',
  },
  buttonHover: {
    justifyContent: 'center',
    '&:hover': {
      background: '#031019',
      color: '#1DA1F2',
      borderRadius: '50rem',
      '& .MuiListItemIcon-root': {
        color: '#1DA1F2',
      },
    },
  },
  textStyle: {
    fontSize: '1.25rem',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 600,
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
  },
  tweetButton: {
    padding: '12px 0px',
    fontSize: '1rem',
    borderRadius: '50rem',
    color: 'white',
    width: '100%',
    textTransform: 'none',
    '&:hover': {
      background: 'rgb(26,145,218)',
    },
  },
  tweetButtonSm: {
    background: '#1DA1F2',
    color: 'white',
    '&:hover': {
      background: 'rgb(26,145,218)',
    },
  },
});

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
