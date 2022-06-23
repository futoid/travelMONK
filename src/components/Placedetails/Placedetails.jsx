import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles"

const Placedetails = ({place}) => {

    const classes = useStyles();

    //console.log(place);
    return (
        <Card elevation={6}>
            <CardMedia
                style={{height : 350}}
                image = {place.photo ? place.photo.images.large.url : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'}
                title = {place.name}
            >
            
            </CardMedia>
            <CardContent>

            {/* place name */}
                <Typography gutterBottom variant = "h5" >{place.name}</Typography>

             {/* raing */}
             <Box display= "flex" justifyContent= "space-between">
                    <Rating value={Number(place.rating)} readOnly/>
                    <Typography variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                </Box>

            {/* price */}
                <Box display= "flex" justifyContent= "space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography variant="subtitle1">{place.price}</Typography>
                </Box>

            {/* rating */}
                <Box display= "flex" justifyContent= "space-between">
                    <Typography variant="subtitle1">Rating</Typography>
                    <Typography variant="subtitle1">{place.rating}</Typography>
                </Box>

            {/* awards */}
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <img src={award.images.small} />
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
                ))}

            {/* cuisine */}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

            {/* address */}
                {place.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>

            </CardContent>
        </Card>
    );
}

export default Placedetails;