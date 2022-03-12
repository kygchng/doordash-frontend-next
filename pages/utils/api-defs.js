let ORIGIN;
if(process.env.NODE_ENV === "development") {
    ORIGIN = "http://localhost:5000"
} else {
    ORIGIN = "https://food-backend.com"
}

export const DASHBOARD_REGISTER_RESTAURANT = () => `${ORIGIN}/api/v1/dashboard/restaurant/register`;
export const DASHBOARD_FETCH_RESTAURANTS = () => `${ORIGIN}/api/v1/dashboard/fetch/restaurants`;
export const DASHBOARD_FETCH_RESTAURANT = (email) => `${ORIGIN}/api/v1/dashboard/fetch/restaurant/${email}`;
