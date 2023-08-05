
import React, { useState, forwardRef , useRef, useImperativeHandle } from 'react';
import { useEffect } from 'react';

const ColorDropdown = (props, ref) => {
  const [color, setColor] = useState('');
  const [showColor, setShowColor] = useState(false)

//   const colorRef = useRef()

//   useImperativeHandle(ref,()=>({
//    color: colorRef.current.value

//   }),[colorRef])

  const handleColor = (e) => setColor(e.target.value);

  const handleColorChange = () => {
    setShowColor(true)
    ref.current.style.backgroundColor = color.toLowerCase();
  };

  useEffect(()=>{
    setShowColor(false)
  },[color])

  return (
    <div className='color_component' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{display: "block", width: '600px', height: "60px"}}>
        {showColor && <p>{color}</p>}
      </div>
      <select style={{ padding: '1rem', width: '600px' }} onChange={handleColor} value={color}>
      {/* <select style={{ padding: '1rem', width: '600px' }} onChange={handleColor} value={color} ref={colorRef}> */}
        <option value='' disabled>
          Select a color
        </option>
        <option value='Red'>Red</option>
        <option value='Green'>Green</option>
        <option value='Blue'>Blue</option>
        <option value='Black'>Black</option>
      </select>
      <button style={{ backgroundColor: 'purple' }} onClick={handleColorChange}>
        Change color
      </button>
    </div>
  );
};

export default forwardRef(ColorDropdown);



