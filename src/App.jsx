import { ThemeProvider } from "@mui/system";
import "./App.css";
import Hero from "./components/hero/Hero";
import TeslaNavBar from "./components/navbar/navbar";
import theme from "./theme";
import Each from "./components/eachmodel/Each";
import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";
import car5 from "./assets/car5.jpg";
import car6 from "./assets/car6.jpg";
import car7 from "./assets/carX.jpg";

import { useEffect, useRef } from "react";
import { UIProvider } from "./components/context/ui/context";
import AppDrawer from "./components/drawer/drawer";

function App() {
  const heroRef = useRef();
  const eachRef1 = useRef();
  const eachRef2 = useRef();
  const eachRef3 = useRef();
  const eachRef4 = useRef();

  useEffect(() => {
    const heroElement = heroRef.current;
    const eachElement1 = eachRef1.current;
    const eachElement2 = eachRef2.current;
    const eachElement3 = eachRef3.current;
    const eachElement4 = eachRef4.current;

    const observerOptions = {
      threshold: 0.1,
    };

    const scrollIntoView = (element) => {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        scrollIntoView(entry.target);
      }
    }, observerOptions);

    observer.observe(heroElement);
    observer.observe(eachElement1);
    observer.observe(eachElement2);
    observer.observe(eachElement3);
    observer.observe(eachElement4);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <UIProvider>
          <TeslaNavBar />
          <AppDrawer/>
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={eachRef1}>
            <Each
              model="Model Y"
              image={car5}
              d1={"Starting at $40,240"}
              d2={"After Federal Tax Credit"}
            />
          </div>
          <div ref={eachRef2}>
            <Each
              model="Model S"
              image={car6}
              d1={"Starting at $40,240"}
              d2={"After Federal Tax Credit"}
            />
          </div>
          <div ref={eachRef3}>
            <Each
              model="Model X"
              image={car7}
              d1={"Starting at $40,240"}
              d2={"After Federal Tax Credit"}
            />
          </div>
          <div ref={eachRef4}>
            <Each
              model="Model 3"
              image={car6}
              d1={"Starting at $40,240"}
              d2={"After Federal Tax Credit"}
            />
          </div>
        </UIProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
