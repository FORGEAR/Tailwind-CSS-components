import '@styles/globals.css'

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Tailwind CSS components',
  description: 'A free repository of open source Tailwind CSS components and templates to bootstrap your new apps, projects or landing sites!',
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/assets/images/logo.svg" />
      </head>
      <body className="no-scrollbar overflow-y-auto">
          <Provider>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
              <Nav />
              {children}
              <Footer />
            </main>
          </Provider>
      </body>
    </html>
  )
}

export default Rootlayout