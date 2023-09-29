import { SocialIcon } from "react-social-icons";

export default function SocialLinks() {
  return (
    <ul className="social-links flex justify-center">
      <li>
        <SocialIcon
          url="https://github.com/rcaldeiradev"
          target="_blank"
          rel="noreferrer"
          bgColor="#FFFFFF"
          className="mx-3"
        />
      </li>
      <li>
        <SocialIcon
          url="https://www.linkedin.com/in/rafaelcaldeiradasilva"
          target="_blank"
          rel="noreferrer"
          bgColor="#FFFFFF"
          className="mx-3"
        />
      </li>
    </ul>
  )
}
