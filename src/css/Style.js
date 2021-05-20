import { createMuiTheme, makeStyles } from '@material-ui/core/styles';


const headerheigth = "3rem", firstColor = "#3664f4", darkColor = "#070D1F", darkColorAlt= "#283B2A", whiteColor= "#E6E7E9", normalFontSize= '0.938rem', smallFontSize = '0.813rem', zIndexFixed= '100';
 


export const useStyle = makeStyles(()=>{

     const theme = createMuiTheme({
        breakpoints:{
            values:{
                xs: 0,
                sm: 768,
                md: 960,
                lg: 1280,
                xl: 1920
            }
        }
    })

    return{

        header:{
        [theme.breakpoints.up('sm')]:{
            
        },
        width: '100%',
        height: headerheigth,
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: darkColor,
        zIndex: zIndexFixed,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    headerLogo:{
        color: whiteColor
    },

    headerToggle:{
        color: whiteColor,
        fontSize: '1.5rem',
        cursor: 'pointer'
    },

    navMenu:{
        [theme.breakpoints.down('sm')]:{
            position: 'fixed',
            top: '0',
            left: '0',
            color: whiteColor,
            width: '100%',
            height: '100vh',
            padding: '1.5rem 0',
            zIndex: zIndexFixed,
            transition: '0.5s',
            backgroundColor: darkColor,
        },
    },

    navContent:{
        maxWidth: '1024px',
        display: 'grid',
        gridTemplateColumns:'100%',
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
        height: '100%',
        gridTemplateRows: 'max-content 1fr max-content',
        rowGap: '2rem',
    },

    navClose:{
        position: 'absolute',
        right: '1.5rem',
        fontSize: '1.3rem',
        padding: '0.25rem',
        backgroundColor: darkColorAlt,
        borderRadius: '50%',
        cursor: 'pointer',
        marginTop: '1.2rem'
    },

    navImg:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0.25rem',
        marginBottom: '0.8rem',
        width: '56px',
        heigth: '56px',
        backgroundColor: firstColor,
        borderRadius: '50%',
        overflow: 'hidden'
    },

    imgP:{
        width: '46px'
    },
    navName:{
        color: whiteColor,
        display: 'block'
    }, 
    navProfession:{
        fontSize: smallFontSize
    },
    navigMenu:{
        alignSelf: 'center'
    },
    navItem:{
        
    }
}
});