import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface LayoutProps {
    children: JSX.Element,
    title?: string
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Roberto Macias" />
                <meta name="description" content={`Information about ${title}`} />
                <meta name="keyword" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={`Information about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    );
};
