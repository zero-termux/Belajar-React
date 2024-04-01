import { useState } from 'react'

function App() {
   const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default App
