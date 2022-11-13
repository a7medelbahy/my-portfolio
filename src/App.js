import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

import { TabsSwitches } from "./data";
const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          {TabsSwitches.map((item) => {
            return <Tab key={item.id}>{item.icon}</Tab>;
          })}
        </TabList>

        <TabPanel>
          <Home />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Portfolio />
        </TabPanel>
        <TabPanel>
          <Services />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default App;
