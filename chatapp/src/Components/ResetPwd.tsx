import { Dispatch, FC, SetStateAction } from "react";
import { GrClose } from "react-icons/gr";

interface ResetPwdProps {
  isOpen: boolean;
  onClose: () => void;
  handlePasswordReset: () => Promise<void>;
  resetPasswordEmail: string;
  resetPasswordSuccess: string | null;
  resetPasswordError: string | null;
  setResetPasswordEmail: Dispatch<SetStateAction<string>>;
}

const ForgetPwd: FC<ResetPwdProps> = (props) => {
  const {
    isOpen,
    onClose,
    handlePasswordReset,
    resetPasswordError,
    resetPasswordSuccess,
    resetPasswordEmail,
    setResetPasswordEmail
  } = props;

  return (
    <div
      className="reset-cont"
      style={{ transform: `translateY(${isOpen ? "0%" : "-100%"})` }}
    >
      <div className="reset">
        <GrClose onClick={onClose} className="close-btn" />
        <h2>
          <b>Password Reset</b>
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={resetPasswordEmail}
          onChange={(e) => setResetPasswordEmail(e.target.value)}
          required
        />
        <button onClick={handlePasswordReset} className="reset-btn">
          Reset Password
        </button>
        {resetPasswordSuccess && <p className="success-msg">{resetPasswordSuccess}</p>}
        {resetPasswordError && <p className="fail-msg">{resetPasswordError}</p>}
      </div>
    </div>
  );
};

export default ForgetPwd;
