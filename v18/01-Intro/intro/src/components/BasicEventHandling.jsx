export default function BasicEventHandling() {
  function handleClick(text) {
    alert(text);
  }

  return (
    <button onClick={() => handleClick("Custom text whooo!")}>
      click to get a customized alert
    </button>
  );
}
