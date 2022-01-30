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
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
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
