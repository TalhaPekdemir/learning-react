// TODO: Will get into after learning useEffect hook.

export default function DateTime() {
  const date = new Date();
  const currentDate = date.toLocaleDateString();
  const currentTime = date.toLocaleTimeString();

  // componentDidMount()
  // setInterval(updateDate, 1000);

  return <div></div>;
}
