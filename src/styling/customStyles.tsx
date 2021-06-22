import { makeStyles, Theme, createStyles } from '@material-ui/core'
import { IDrawerProps } from '../Interfaces'

export const sidebarStyles = makeStyles({
  drawer: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden'
  },
  drawerPaper: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden',
    background: 'transparent',
    marginLeft: '60px',
    borderRight: '1px solid #182c38'
  },
  listItemIconPadding: {
    display: 'block',
    fontSize: '2rem',
    minWidth: 0
  },
  buttonHover: {
    justifyContent: 'center',
    '&:hover': {
      background: '#031019',
      color: '#1DA1F2',
      '& .MuiListItemIcon-root': {
        color: '#1DA1F2'
      }
    }
  },
  textStyle: {
    fontSize: '1.25rem',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: 600,
    lineHeight: '1.75',
    letterSpacing: '0.02857em'
  },
  iconSize: {
    fontSize: '1.25rem'
  }
})

export const searchStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      borderRadius: '50rem'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
)
