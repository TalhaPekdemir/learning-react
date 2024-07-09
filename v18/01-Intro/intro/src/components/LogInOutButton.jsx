import ButtonWithText from "./ButtonWithText";

export default function LogInOutButton() {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <ButtonWithText text="Log Out" />
  ) : (
    <ButtonWithText text="Log In" />
  );
}
