import "./footer.css";
import { Button } from "../Button/button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/github.jpeg", "GitHub", "https://github.com/luinespic/")}
${Button(
  "/linkedin.jpeg",
  "LinkedIn",
  "https://www.linkedin.com/in/lucia-inesta",
)}
</div>
`;
