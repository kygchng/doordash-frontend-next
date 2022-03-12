//import Head from 'next/head'
import { DASHBOARD_FETCH_RESTAURANTS } from './utils/api-defs';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import boxStyles from './css/materialUI.module.css';
import Typography from '@mui/material/Typography';
import utilStyles from './css/utils.module.css';

export async function getServerSideProps() {
  const response = await fetch(DASHBOARD_FETCH_RESTAURANTS());
  const allRestaurantData = await response.json();
  return {
    props: {allRestaurantData}
  }
}

export default function Home({allRestaurantData}) {
  const sixRestaurants = allRestaurantData.slice(0, 6);
  console.log(sixRestaurants);
  const restaurantList = sixRestaurants.map(restaurant => {
    return (
      <Card> 
        <CardContent>
          <Typography component="h2">
            {restaurant.restaurant_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {restaurant.about_description}
          </Typography>
        </CardContent>
      </Card>
    )
    return <div> {restaurantList} </div> 
  })
  return (
    <div>
      <section className = {`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Box>
            {restaurantList}
        </Box>
      </section>
    </div>
  )
}
