import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PersonIcon from '@material-ui/icons/Person'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IDrawerProps } from '../Interfaces'

const useStyles = makeStyles({
  drawer: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden'
  },
  drawerPaper: {
    width: (props: IDrawerProps) => props.drawerWidth,
    overflowX: 'hidden',
    background: 'transparent'
  },
  listItemIconPadding: {
    display: 'block',
    fontSize: '2rem',
    minWidth: 0
  },
  buttonHover: {
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

const Sidebar: React.FC<IDrawerProps> = ({ drawerWidth }) => {
  const classes = useStyles({ drawerWidth })
  const drawerList = ['Home', 'Explore', 'Notifications', 'Profile', 'More']
  const drawerListIcons = [
    <HomeIcon />,
    <LineStyleIcon />,
    <NotificationsIcon />,
    <PersonIcon />,
    <MoreHorizIcon />
  ]

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
      anchor='left'
    >
      <List>
        <ListItem
          button
          className={classes.buttonHover}
          style={{ justifyContent: 'center' }}
        >
          <ListItemIcon
            className={clsx({
              [classes.listItemIconPadding]: drawerWidth < 240
            })}
            style={{ justifyContent: 'center' }}
          >
            <TwitterIcon fontSize='large' />
          </ListItemIcon>
        </ListItem>
        {drawerList.map((text, index) => (
          <ListItem button key={text} className={classes.buttonHover}>
            <ListItemIcon
              className={clsx({
                [classes.listItemIconPadding]: drawerWidth < 240
              })}
            >
              {drawerListIcons[index]}
            </ListItemIcon>
            <Hidden mdDown>
              <ListItemText
                primary={text}
                classes={{
                  primary: classes.textStyle
                }}
              />
            </Hidden>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
