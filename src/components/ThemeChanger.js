// import React, { useState, useEffect } from 'react'

// const ThemeChanger = () => {
//     const [themeState, setThemeState] = useState(false);

//     const handleChange = () => {
//         setThemeState(!themeState);
//         if (themeState) {
//             localStorage.setItem('Theme', 'dark');
//             document.body.classList.add('dark-mode');
//         } else {
//             localStorage.setItem('Theme', 'light');
//             document.body.classList.remove('dark-mode');
//         }
//     }
//     useEffect(() => {
//         const getTheme = localStorage.getItem('Theme');
//         if (getTheme === 'dark') return document.body.classList.add('dark-mode');
//     })
//     return (
//         <div>
//             <button className="btn__header btn__theme" onClick={handleChange}>{themeState ? <i className="fa fa-sun-o"></i> : <i className="fa fa-moon-o"></i>}</button>
//         </div>
//     )
// }

// export default ThemeChanger;

//-------------------------//

import React, { Component } from 'react'



export default class ThemeChanger extends Component {

    state = {
        theme: 'light'
    }

    handleChange = () => {
        if (this.state.theme === 'light') {
            document.body.classList.add('dark-mode');
            this.setState({ theme: 'dark' })
        }
        else {
            document.body.classList.remove('dark-mode');
            this.setState({ theme: 'light' })
        }
    }

    render() {
        return (
            <div>
                <button className="btn__header btn__theme" onClick={this.handleChange}>{this.state.theme === 'light' ? <i className="fa fa-sun-o"></i> : <i className="fa fa-moon-o"></i>}</button>
            </div>
        )
    }
}
