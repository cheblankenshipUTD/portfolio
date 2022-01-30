import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const Layout = ({ children }) => (
    <>
        <Head>
            <title>Che B Portfolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-V4BTHRK4LE"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-V4BTHRK4LE');
            </script>
        </Head>
        <DefaultSeo
            titleTemplate="%s - Che Blankenship"
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                description: 'The personal website for Che Blankenship.',
                site_name: 'Che Blankenship | cheblankenship.com',
                images: [],
            }}
        />
        <NavigationBar style={{"position": "fixed", "top": 0, "width": "100%"}}/>
        { children }
        <Footer />
    </>
)

export default Layout;
