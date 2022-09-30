import { useState } from 'react';
import './App.css';

function App() {
const [ikä, setIkä] = useState(0)
const [sykealue, setTavoitesyke] = useState(0)

function laske(e) {
  e.preventDefault()
  const tulos1 = (220 - ikä) *0.65
  const tulos2 = (220 - ikä) *0.85
  setTavoitesyke(" "+ tulos1.toFixed(0) + "-" + tulos2.toFixed(0))
  
  
}

  return (
   <div id="content">
    <h3>Sykemittari</h3>
    <form onSubmit={laske}>
      <div>
      <label>ikä</label>
      <input value={ikä} onChange={e => setIkä(e.target.value)}/>
      </div>
      <div>
        <label>sykealue</label>
        <output>{sykealue}</output>
        </div>
        <button>laske</button>
      </form>
   </div>
  );
}

export default App;
