import { createContext, useState, use } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const handleOneClick = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
    }
    return <ThemeContext.Provider value={{ theme, handleOneClick }}> {children}</ThemeContext.Provider>
}

export const DarkLight = () => {
    const { theme, handleOneClick } = use(ThemeContext)
    return (
        <>
            <div className={`p-4 flex justify-center items-center h-screen flex-col gap-2 ${theme=='dark'?'bg-gray-800':'bg-white'}`}>
                <div className={`${theme=='dark'?'text-white':'text-black'}`}>
                <h1>Hello this is a theme Page</h1>
                <h2>this is React Page</h2>
                </div>
                <button className='bg-blue-800 text-white border-none font-bold px-4 py-3 rounded-lg' onClick={handleOneClick}>Set to {theme == 'dark' ? 'light' : 'dark'} mode</button>
            </div>
        </>
    )
}