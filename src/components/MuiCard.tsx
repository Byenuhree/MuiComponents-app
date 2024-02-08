import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material"

export const MuiCard = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://media.istockphoto.com/id/1204463721/photo/iguana-surprise.jpg?s=1024x1024&w=is&k=20&c=rg1xUSJr6OUw7cAa2twabYX4Cw2DodlwKyXSULcpJ_k="
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
