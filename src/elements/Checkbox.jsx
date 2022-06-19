import React, { useState } from 'react';
 
const languageList = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "spanish", label: "Spanish" },
  { value: "arabic", label: "Arabic" }
];
 
function Check() {
 
  const [lang, setLang] = useState([]);
 
  const handleChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      // push selected value in list
      setLang(prev => [...prev, value]);
    } else {
      // remove unchecked value from the list
      setLang(prev => prev.filter(x => x !== value));
    }
  }
 
  return (
    <div className="check">
      <h4>Checkbox list in React </h4>
 
      <div className='title'>Select languages from the list</div>
      {languageList.map((x, i) => <label key={i}>
        <input
          type="checkbox"
          name="lang"
          value={x.value}
          onChange={handleChange}
        /> {x.label}
      </label>)}
 
      <div>Selected languages: {lang.length ? lang.join(', ') : null}</div>
    </div>
  );
}
 
export default Check;