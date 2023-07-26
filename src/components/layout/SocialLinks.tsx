import { SocialIcon } from "react-social-icons";

export default function SocialLinks() {
  return (
    <ul className="social-links flex justify-center">
      <li>
        <SocialIcon url="https://github.com/rcaldeiradev" target="_blank" rel="noreferrer" className="mx-2" />
      </li>
      <li>
        <SocialIcon url="https://www.linkedin.com/in/rafaelcaldeiradasilva" target="_blank" rel="noreferrer" bgColor="#000000" className="mx-2" />
      </li>
    </ul>
  )
}
