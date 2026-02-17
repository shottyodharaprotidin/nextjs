
"use client"
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const StyleSelectors = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [removeSelection, setRemoveSelector]=useState(true)
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    if (!mounted) {
        return null;
    }
    return (
        <div className={`style-settings ${removeSelection ? 'opened' : ''}`}>
        <div className="style-settings-icon" onClick={()=>{
         setRemoveSelector(!removeSelection)
        }}>&nbsp;</div>
        <div className="style-settings-content">
          <ul>
            <li>
              <h4>Select Layout</h4>
              <div className="main-demo">
                <div className="d-col">
                  <a href="/">
                    <img
                      src="../../assets/img/preview_1.jpg"
                      alt=""
                    />
                  </a>
                  <h6>LTR</h6>
                </div>
                <div className="d-col">
                  <a href="/rtl/home">
                    <img
                      src="../../assets/img/preview_2.jpg"
                      alt=""
                    />
                  </a>
                  <h6>RTL</h6>
                </div>
              

              </div>
            </li>
          </ul>
          <h4>Light/Dark Version</h4>
          <ul>
            <li className="clearfix">
              <label>Color Scheme</label>
              <select name="color_scheme"
                value={theme}
                onChange={(e) => handleThemeChange(e.target.value)}>
                <option
                  value="light"
                  className="light-button"
                >
                  Light
                </option>
                <option value="skin-dark" className="dark-button">
                  Dark
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      
    );
};

export default StyleSelectors;