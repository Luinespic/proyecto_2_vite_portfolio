import "./style.css";
import { changeTheme } from "./utils/changeTheme";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/NavBar/navBar";
import { Footer } from "./components/Footer/footer";
import { Home } from "./pages/Home/home";
import { Projects } from "./pages/Projects/projects";
import { Divider } from "./components/Divider/divider";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());
