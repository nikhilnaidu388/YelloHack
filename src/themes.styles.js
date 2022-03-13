import { createGlobalStyle } from "styled-components"

const darkTheme = {
    body : '#121212',
    fontColor: '#fff',
    thColor: 'pink',
    theadColor: '#025955',
    divColor: 'red'
}

const lightTheme = {
    body : '#fff',
    fontColor: '#000',
    thColor: 'darkgrey',
    theadColor: 'black',
    divColor: '#fff'
}
const GlobalStyles = createGlobalStyle`
body{
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
    td{
        color:${({theme})=>theme.fontColor}
       }
    th{
        color:${({theme})=>theme.thColor}
       }
       thead{
           background: ${({ theme }) => theme.theadColor};
       }
       table-responsive{
        background: ${({ theme }) => theme.divColor};
       }
      
}
`
export {darkTheme, lightTheme, GlobalStyles}