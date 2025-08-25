'use client';

import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggleIcon() {
    const { theme, toggleTheme } = useTheme();
    return (
        <span
            className={`btn ${theme === 'light' ? 'btn-outline-secondary' : 'btn-outline-light'}`}
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
        >
            {theme === 'light' ? (
                <i className='bi bi-moon'></i>
            ) : (
                <i className='bi bi-sun'></i>
            )}
        </span>
    );
}