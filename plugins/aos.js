import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({ offset: -150 }); // or any other options you need
};
