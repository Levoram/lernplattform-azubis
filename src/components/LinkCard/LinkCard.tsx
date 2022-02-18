import { NavCardLink } from "./LinkCardElement";

type LinkCardProps = {
  navlinktarget: string;
  text: string;
};
const LinkCard = ({ navlinktarget, text }: LinkCardProps) => {
  return <NavCardLink to={navlinktarget}>{text}</NavCardLink>;
};

export default LinkCard;
