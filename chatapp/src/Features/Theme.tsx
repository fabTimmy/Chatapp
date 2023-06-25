/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useMemo } from "react"
import { createTheme } from '@mui/material/styles';

export const tokens = (mode: string) => ({
    ...(mode === 'dark'
    ? {
            black: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            },
            green: {
                100: "#d7efd6",
                200: "#b0dead",
                300: "#88ce83",
                400: "#61bd5a",
                500: "#39ad31",
                600: "#2e8a27",
                700: "#22681d",
                800: "#174514",
                900: "#0b230a"
            },
            white: {
                100: "#fefdfd",
                200: "#fefbfb",
                300: "#fdfaf9",
                400: "#fdf8f7",
                500: "#fcf6f5",
                600: "#cac5c4",
                700: "#979493",
                800: "#656262",
                900: "#323131"
            },
            primary: {
                100: "#cccccc",
                200: "#999999",
                300: "#666666",
                400: "#333333",
                500: "#000000",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000"
            },
            indigo: {
                100: "#e0e0e0",
                200: "#c0c0c0",
                300: "#a1a1a1",
                400: "#818181",
                500: "#626262",
                600: "#4e4e4e",
                700: "#3b3b3b",
                800: "#272727",
                900: "#141414"
            },
            // Black: '#000',
            // btnColor: '#39ad31',
            // White: '#fff',
            // joinUsBg: '#fcf6f5',
            // textBg: '#626262'
        } : {
            // White: '#fff',
            // textBg: '#626262',
            // joinUsBg: '#fcf6f5',
            // btnColor: '#39ad31',
            // Black: '#000',
            black: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff",
            },
            green: {
                100: "#0b230a",
                200: "#174514",
                300: "#22681d",
                400: "#2e8a27",
                500: "#39ad31",
                600: "#d7efd6",
                700: "#61bd5a",
                800: "#88ce83",
                900: "#b0dead",
            },
            white: {
                100: "#323131",
                200: "#656262",
                300: "#979493",
                400: "#cac5c4",
                500: "#fcf6f5",
                600: "#fdf8f7",
                700: "#fdfaf9",
                800: "#fefbfb",
                900: "#fefdfd",
            },
            primary: {
                100: "#000000",
                200: "#000000",
                300: "#000000",
                400: "#000000",
                500: "#000000",
                600: "#333333",
                700: "#666666",
                800: "#999999",
                900: "#cccccc",
            },
            indigo: {
                100: "#141414",
                200: "#272727",
                300: "#3b3b3b",
                400: "#4e4e4e",
                500: "#626262",
                600: "#818181",
                700: "#a1a1a1",
                800: "#c0c0c0",
                900: "#e0e0e0",
            },
        }
    )
})

// mui theme settings
export const themeSettings = (mode: any) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    black: {
                        main: colors.black[500],
                    },
                    secondary: {
                        main: colors.green[500],
                    },
                    neutral: {
                        dark: colors.black[100],
                        main: colors.black[500],
                        light: colors.black[100]
                    },
                    background: {
                        default: colors.black[800]
                    }
                } : {
                    white: {
                        main: colors.white[500],
                    },
                    secondary: {
                        main: colors.green[500],
                    },
                    neutral: {
                        dark: colors.white[700],
                        main: colors.white[500],
                        light: colors.white[100]
                    },
                    background: {
                        default: '#fcfcfc'
                    },
                }),
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

export const useMode = () => {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
        }),
        []
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
};
