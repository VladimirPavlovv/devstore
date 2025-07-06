import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Dev Store",
  description: "Store for Software Developers",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
    <html lang="en">
      <Head />
      <body>
        <div id="portal" />
        <div id="app" >
          <header>
            <div className="header-content">
              <Link href={'/'}>
                <h1>Dev Store</h1>
              </Link>

              <h5 className="mid-text">~Cool stuff for developers~</h5>
              <Cart />
            </div>
          </header>

          <main>
            {children}
          </main>
          <div className="hr" />

          <footer>
            <div className="email-container">
              <h5>Stay alert about new additions to the store,
                special offers and even more.</h5>
                <EmailInput />
            </div>

            <div className="links-container">
              <div>
                <h3>Dev Store</h3>
                <Link href={'/'}>Home</Link>
                <Link href={'/cart'}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={'/contact'}>Contacts</Link>
                <Link href={'/faq'}>FAQs</Link>
              </div>
            </div>

            <div className="socials">
              <p>&copy;<a href="" target="_blank">Vladimir Pavlov</a> 2025<br />
              Built with NextJS & <a href="/" target="_blank">FantaCSS</a></p>
              <div className="social-links">
                <Link href={'https://github.com/VladimirPavlovv'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                <Link href={'https://www.linkedin.com/in/vladimir-pavlov-0126b7368/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
              </div>
            </div>

          </footer>
        </div>
      </body>
    </html>
    </ProductsProvider>
  );
}
