
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  
 
  {
    img: 'https://i.ytimg.com/vi/0QrbdHhP2Us/hqdefault.jpg',
    title: 'reading books',
    
    cols: 2,
  },
  {
    img: 'https://pbi.uii.ac.id/wp-content/uploads/2022/03/Five-Reasons-Why-Watching-Movies-Is-Beneficial-to-Our-Personal-Development.jpg',
    title: 'watching movies',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {

    img: 'https://www.shutterstock.com/image-illustration/learn-something-new-word-cloud-260nw-400547077.jpg',
    title: 'learning new things',
    
    rows: 2,
    cols: 2,
  },
  
  {
    img: 'https://t.pimg.jp/081/712/625/1/81712625.jpg',
    title: 'listening music',
    
  },
  {
    img: 'https://previews.123rf.com/images/mrswilkins/mrswilkins1804/mrswilkins180400145/99471883-dance-logo-vector-design-symbol.jpg',
    title: 'dancing',
  
    cols: 2,
  },
];
