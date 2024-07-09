export default function BasicEventHandling() {
  function handleClick() {
    alert("You have been alerted!");
  }

  return <button onClick={handleClick}>click to get an alert</button>;
}
