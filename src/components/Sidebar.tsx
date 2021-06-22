import React from 'react'
import clsx from 'clsx'
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PersonIcon from '@material-ui/icons/Person'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { IDrawerProps } from '../Interfaces'
import { sidebarStyles } from '../styling/customStyles'

// Todo: Make hover border radius circle on compressed view
// Add Tweet button

const Sidebar: React.FC<IDrawerProps> = ({ drawerWidth }) => {
  const classes = sidebarStyles({ drawerWidth })
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
      <List style={{ height: '100%' }}>
        <ListItem button className={classes.buttonHover}>
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
        <ListItem
          button
          className={classes.buttonHover}
          style={{ position: 'absolute', bottom: 0 }}
        >
          <ListItemIcon
            className={clsx({
              [classes.listItemIconPadding]: drawerWidth < 240
            })}
          >
            <Avatar
              alt='Remy Sharp'
              src='https://material-ui.com/static/images/avatar/3.jpg'
            />
          </ListItemIcon>
          <Hidden mdDown>
            <ListItemText
              primary={'Remy Sharp'}
              classes={{
                primary: classes.textStyle
              }}
            />
          </Hidden>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
