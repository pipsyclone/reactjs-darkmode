import { useEffect, useState } from 'react';

const Script = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('darkmode')
        localStorage.setItem('theme', 'darkmode')
        }else{
        setTheme('light')
        localStorage.removeItem('theme')
        }
    }

    useEffect (() => {
        if (localStorage.getItem('theme')) {
        document.body.className = 'body-darkmode';
        }else{
        setTheme('light')
        document.body.className = '';
        }
    }, [theme])

    return {
        theme, toggleTheme
    }
}

export default Script;