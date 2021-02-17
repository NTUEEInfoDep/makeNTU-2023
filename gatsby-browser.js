import { navigate } from "gatsby";
import "./src/assets/css/style.css";

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new origin", location.origin);
    console.log("old origin", prevLocation ? prevLocation.origin : null);
    if (prevLocation && location.origin === prevLocation.origin) {
        // same domain
    } else {
        navigate("/");
    }
};
