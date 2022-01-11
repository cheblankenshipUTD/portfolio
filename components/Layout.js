import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const Layout = ({ children }) => (
    <>
        <Head>
            <title>Che B Portfolio</title>
        </Head>
        <DefaultSeo
            titleTemplate="%s - Che Blankenship"
            openGraph={{
                type: 'website',
                locale: 'en_IE',
                description: 'The personal website for Che Blankenship.',
                site_name: 'Che Blankenshio | cheblankenship.com',
                images: [],
            }}
        />
        <NavigationBar style={{"position": "fixed", "top": 0, "width": "100%"}}/>
        { children }
        <Footer />
    </>
)

export default Layout;