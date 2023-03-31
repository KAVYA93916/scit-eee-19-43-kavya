import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="data:image/png;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute Of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" — Bachelor OF technology In EEE"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Trinity" src="http://vitasoft.in/images/portfolio_img/trinity.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Girls Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Trinity" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSQM1Y9RF8tqOHVp4krEzT1vtUo2h9QVseA&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Girls Secondary School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                95% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

