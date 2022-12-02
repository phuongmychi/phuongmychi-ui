/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import "./ProfileCard.scss";
interface ProfileCardProps {
  name: string;
  imgurl: string;
  jobtile: string;
  facebook: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  name,
  imgurl,
  jobtile,
  facebook,
}) => {
  return (
    <div className="card">
      <img src={imgurl} alt={name} className="imgcard" />
      <h1>{name}</h1>
      <p className="title">{jobtile}</p>
      <p>Harvard University</p>
      <div>
        <a href="#">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href={facebook}>
          <i className="fa fa-facebook"></i>
        </a>
      </div>
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
};
export default ProfileCard;
