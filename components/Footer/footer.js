import "./footer.css";
import { Button } from "../Button/button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/github.jpeg", "GitHub", "https://github.com/luinespic/")}
${Button(
  "/public/linkedin.jpeg",
  "LinkedIn",
  "https://www.linkedin.com/in/lucía-iñesta-picó/"
)}
</div>
`;
