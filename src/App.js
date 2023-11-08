import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
import { Context } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import { allproducts } from "./lists/allproducts";
import Singleproduct from "./pages/Singleproduct";
import Home from "./pages/home/Home";
import Thematic from "./pages/thematic/Thematic";
import Delivery from "./pages/Delivery/Delivery";
import Footer from "./components/Footer";
import Footertop from "./components/Footertop";
import Allproducts from "./pages/home/Allproducts";
import Payment from "./pages/Payment";
import LoginPage from "./pages/Login/LoginPage";
import Cart from "./pages/Cart";
import Questions from "./pages/FooterLinks/Questions";
import Vacansies from "./components/Vacansies";
import { MdPalette } from "react-icons/md";
import Brandmarket from "./pages/Brandmarket";
import { colors } from "./lists/colors";
import { AiFillCloseSquare } from "react-icons/ai";
import { fonts } from "./lists/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

function App() {
  const [sIndex, setSIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [openBasket, setOpenBasket] = useState(false);
  const [total, setTotal] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const pageSize = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedResults =
    filtered.length === 0
      ? allproducts.slice(startIndex, endIndex)
      : filtered.slice(startIndex, endIndex);
  const [cateIndex, setCateIndex] = useState(
    localStorage.getItem("namePath") === null
      ? localStorage.getItem("namePath")
      : "Sweets"
  );
  
  const newValue = (product) => {
    return (
     (exchange.value *
      (product.price / exchange.value)) *
      product.quanity
    ).toFixed(2);
  };

  const uri = (x) => {
    if (x) {
      const newUrl = x.replace(/%/g, "-").replace(/`/g, "").replace(/ /g, "-");
      return newUrl;
    }
    return "";
  };

  const cartAdding = (item) => setCart([...cart, item]);
  const cartRemoving = (id) =>
    setCart([...cart.filter((item) => item.id !== id)]);
  const [openCustomize, setOpenCustomize] = useState(false);
  const [exchange, setExchange] = useState({
    code: "AMD",
    value: 401.2252220962
  });

  const rootes = ["--black", "--darkcyan", "--lightgreen", "--primarywhite"];

  // ------- Dont write down -------

  // ------------- props--------------
  const variables = {
    sIndex,
    setSIndex,
    uri,
    setCount,
    currentPage,
    setCurrentPage,
    endIndex,
    paginatedResults,
    openBasket,
    setOpenBasket,
    cart,
    cartAdding,
    cartRemoving,
    total,
    setTotal,
    filtered,
    setFiltered,
    setCateIndex,
    exchange,
    setExchange,
    newValue
  };
  // ------------- props--------------

  useEffect(() => {
    setCateIndex(localStorage.getItem("namePath"));
    let filterProd = allproducts.filter(
      (it) => it.category === localStorage.getItem("namePath")
    );
    setFiltered(filterProd);
    let root = document.querySelector(":root");

    if (localStorage.getItem("theme") !== null) {
      rootes.map((item, i) => {
        root.style.setProperty(
          item,
          localStorage.getItem("theme").split(",")[i]
        );
      });
    }

    if (localStorage.getItem("font") !== null) {
      root.style.setProperty("--font", localStorage.getItem("font"));
    }

    AOS.init({ duration: 500 });
    let welcome = document.querySelector(".welcome__container");
    setTimeout(() => {
      welcome.style.opacity = 0;
      welcome.style.visibility = "hidden";
    }, 2000);
    console.log(exchange);
  }, []);

  return (
    <Context.Provider value={variables}>
      <div className="App">
        <Headertop />
        <div className="welcome__container">
          <Typewriter
            options={{
              strings: ["Welcome to Siada Supermarket"],
              autoStart: true,
              delay: 40,
            }}
          ></Typewriter>
        </div>
        <Header />
        <Routes>
          <Route
            path={`/${uri(paginatedResults[sIndex].name)}`}
            element={<Singleproduct />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Thematic" element={<Thematic />}></Route>
          <Route path="/Delivery" element={<Delivery />}></Route>
          <Route path="/Products" element={<Allproducts />}></Route>
          <Route path="/payment-methods" element={<Payment />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route
            path="/Frequently-Asked-Questions"
            element={<Questions />}
          ></Route>
          <Route path="/Vacansies" element={<Vacansies />}></Route>
          <Route
            path={`/Products-${uri(cateIndex)}`}
            element={<Allproducts />}
          ></Route>
          <Route path="/Brandmarket" element={<Brandmarket />}></Route>
        </Routes>
        <MdPalette
          style={{ transform: openCustomize ? "scale(0)" : "scale(1)" }}
          className="customize__icon"
          onClick={() => setOpenCustomize(!openCustomize)}
        />
        <div
          className="customize__container"
          style={{ right: openCustomize ? "0" : "-100%" }}
        >
          <span>
            <h2>BrandStore</h2>
            <AiFillCloseSquare onClick={() => setOpenCustomize(false)} />
          </span>
          <p>
            Use the template as-is or try different colors and fonts from the
            options below
          </p>
          <h3>Try Other Colors</h3>
          <div className="circles__wrapper">
            {colors.map((it) => {
              return (
                <div
                  key={Math.random()}
                  className={
                    it.name === "default"
                      ? "circles__container circles__container__default"
                      : "circles__container"
                  }
                >
                  <div
                    className="circles__content"
                    onClick={() => {
                      let root = document.querySelector(":root");
                      rootes.forEach((item, i) => {
                        root.style.setProperty(item, it.theme[i]);
                        localStorage.setItem("theme", it.theme);
                      });
                    }}
                  >
                    {it.name === "default" ? <p>Default : </p> : ""}
                    {it.theme.map((col) => (
                      <div
                        key={Math.random()}
                        className="circles"
                        style={{ background: col }}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className="fonts__try">Try Other Fonts</h3>
          <div className="fonts__container">
            {fonts.map((font,i) => {
              return (
                <div
                key={i}
                  className={
                    font.name === "Default : Kanit"
                      ? "fonts__every fonts__every__default"
                      : "fonts__every"
                  }
                  onClick={() => {
                    let root = document.querySelector(":root");
                    root.style.setProperty("--font", font.fontLink);
                    localStorage.setItem("font", font.fontLink);
                  }}
                >
                  <p>{font.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Footertop />
        <Cart />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
