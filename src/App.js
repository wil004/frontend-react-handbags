import React from 'react';
import './App.css';
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import Nav from './Nav';
import Product from './Product'
import Tiles from './Tiles'
function App() {
  return ( <>
        <header>
          <h1>Handbags & Purses</h1>
        </header>
              <nav>
            <Nav
                title={"to the collection"}
            />
            <Nav
                title={"shop all bags"}
            />
            <Nav
                disabled={"disabled"}
                title={"pre-orders"}
            />
              </nav>
          <main>
              <Product
              label={"Best seller"}
              image={bag1}
              product={"The handy bag"}
              price={"€400,-"}
              />
              <Product
                  label={"Best seller"}
                  image={bag2}
                  product={"The stylish bag"}
                  price={"€250,-"}
              />
              <Product
                  label={"New collection"}
                  image={bag3}
                  product={"The simple bag"}
                  price={"€300,-"}
              />
              <Product
                  label={"New collection"}
                  image={bag4}
                  product={"The trendy bag"}
                  price={"€150,-"}
              />
        </main>
          <footer>
            <Tiles
                title={"The Brand"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                "incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation " +
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                "Duis aute irure dolor in reprehenderit" +
                " in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
                "mollit anim id est laborum."}
                />
              <Tiles
                  image={brand}
                  />
              <Tiles
                  image={our_story}
              />
              <Tiles
                  title={"The Brand"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                  "incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation " +
                  "ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
                  "Duis aute irure dolor in reprehenderit" +
                  " in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
                  "mollit anim id est laborum."}
              />
          </footer>
    </>
  );
}

export default App;



