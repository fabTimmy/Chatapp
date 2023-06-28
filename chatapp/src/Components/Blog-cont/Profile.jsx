import { useEffect, useState } from "react";
import { useAppSelector } from "../../Hooks/StoreHook";
import { CiEdit } from "react-icons/ci";
import { BiHelpCircle, BiMessageMinus } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { upLoad } from "../../Config/firebase";
import Nav from "../Scenes/Nav";
import { BsBackspaceReverse } from "react-icons/bs";
import { MdOutlineAddAPhoto, MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { GrShieldSecurity } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [photoURL, setPhotoURL] = useState("../../Image/unknownUser.png");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpena, setIsOpena] = useState(false);
  const [isOpenb, setIsOpenb] = useState(false);
  const [isOpenc, setIsOpenc] = useState(false);
  const [isOpend, setIsOpend] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const { user: user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user?.photoUrl) {
      setPhotoURL(user?.photoUrl);
    }
  }, [user]);

  const handleChange = () => {
    // if(e.target.files[0]){
    //   setPhoto(e.target.files[0])
    // }
  };
  const handleClick = () => {
    // upLoad(photo, user, setLoading)
  };

  return (
    <>
      {!open ? (
        <div className="profile-cont">
          {image ? (
            <>
              <img src={image} alt={fileName} className="profile-img" />
            </>
          ) : (
            <>
              <img src={photoURL} alt="" className="profile-img" />
            </>
          )}
          <div className="prof-head">
            <MdOutlineAddAPhoto
              size="25"
              onClick={() => document.querySelector(".img-upload").click()}
              className="camera"
            />
          </div>
          <input
            type="file"
            className="img-upload"
            hidden
            // eslint-disable-next-line react/jsx-no-duplicate-props
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {/* <div className="pro-cont">
            <div className="pro-head">
              <h2>Contact Information</h2>
              <div className="edit" onClick={() => setOpen(!open)}>
                <CiEdit className="pro-icon" />
                <p>Edit</p>
              </div>
            </div>
            <div className="pro-text">
              <div className="pro-content">
                <BiMessageMinus className="pro-icon" />
                <p>{user?.email}</p>
              </div>
              <div className="pro-content">
                <FiPhoneCall className="pro-icon" />
                <p>{user?.email}</p>
              </div>
              <div className="pro-content">
                <SlLocationPin className="pro-icon" />
                <p>{user?.email}</p>
              </div>
            </div>
          </div> */}

          <div className="settings-cont-2">
            <button
              onClick={() => setIsOpena((prev) => !prev)}
              className="p-info"
            >
              <div className="personal-info">
                <CgProfile className="profile" />
                <h3>Personal Info</h3>
              </div>
              <div className="arrow-cont">
              {!isOpena ? (
                <AiOutlineCaretDown className="arrow" />
              ) : (
                <AiOutlineCaretUp className="arrow" />
              )}
              </div>
            </button>

            {isOpena && (
              <div className="person-cont">
                <div className="person-info">
                  <h4>Name</h4>
                  <p>{user.displayName}</p>
                </div>
                <div className="person-info">
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsOpenb((prev) => !prev)}
              className="p-info"
            >
              <div className="personal-info">
                <MdOutlinePrivacyTip className="profile" />
                <h3>Privacy</h3>
              </div>
              {!isOpenb ? (
                <AiOutlineCaretDown className="arrow" />
              ) : (
                <AiOutlineCaretUp className="arrow" />
              )}
            </button>

            {isOpenb && (
              <div className="privacy-cont">
                <div className="privacy-info">
                  <h4>Name</h4>
                  <p>{user.displayName}</p>
                </div>
                <div className="privacy-info">
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsOpenc((prev) => !prev)}
              className="p-info"
            >
              <div className="personal-info">
                <GrShieldSecurity className="profile" />
                <h3>Security</h3>
              </div>
              {!isOpenc ? (
                <AiOutlineCaretDown className="arrow" />
              ) : (
                <AiOutlineCaretUp className="arrow" />
              )}
            </button>

            {isOpenc && (
              <div className="secure-cont">
                <div className="secure-info">
                  <p>Show security notification</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsOpend((prev) => !prev)}
              className="p-info"
            >
              <div className="personal-info">
                <BiHelpCircle className="profile" />
                <h3>Help</h3>
              </div>
              {!isOpend ? (
                <AiOutlineCaretDown className="arrow" />
              ) : (
                <AiOutlineCaretUp className="arrow" />
              )}
            </button>

            {isOpend && (
              <div className="help-cont">
                <div className="help-info">
                  <p>FAQs</p>
                </div>
                <div className="help-info">
                  <p>Contact</p>
                </div>
                <div className="help-info">
                  <p>Terms & Privacy policy</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <form className="pro-form">
          <div className="form-head">
            <h2>Contact Information</h2>
            <BsBackspaceReverse
              onClick={() => setOpen(!open)}
              className="form-icon "
            />
          </div>
          <label htmlFor="first name">
            First name <span>*</span>
          </label>
          <input required type="text" placeholder="First name" />
          <label htmlFor="last name">
            Last name <span>*</span>
          </label>
          <input required type="text" placeholder="Last name" />
          <label htmlFor="phone">Phone</label>
          <input required type="number" placeholder="Phone" />
          <label htmlFor="email">Email</label>
          <input required type="email" placeholder="Email" />
          <label htmlFor="location">Location</label>
          <input required type="text" placeholder="Location" />
          <button className="btn-4">Save</button>
        </form>
      )}
    </>
  );
};

export default Profile;
