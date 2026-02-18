import List from "../components/list";
import TopBar from "../components/topBar";
import Links from "../components/links";

export default function Home() {
    const dailyDrivers = [
        {
            name: "ASUS Vivobook S14X OLED",
            property1: "i5-12500H",
            property2: "16GB RAM"
        },
        {
            name: "Apple iPhone 14",
            property1: "128GB",
            property2: "Starlight"
        },
        {
            name: `Apple iPad 10"`,
            property1: "32GB",
            property2: "Silver"
        },
        {
            name: "Apple AirPods Pro",
            property1: "2nd Generation",
            property2: "USB-C"
        },
        {
            name: "Apple Watch S",
            property1: "2nd Generation",
            property2: "Midnight"
        }
    ];
    const peripherals = [
        {
            name: "ATH MX20x",
            property1: "Black"
        },
        {
            name: "Logitech MX Master 3S",
            property1: "Black"
        },
        {
            name: "Some Keyboard",
            property1: "AliExpress :D",
            property2: "White"
        },
        {
            name: "HyperX SoloCast",
            property1: "Black"
        }
    ];
    const networking = [
        {
            name: "Ubiquiti UCG Ultra",
            property1: "UniFi Network",
            property2: "2.5GbE WAN"
        },
        {
            name: "Ubiquiti U7 Lite",
            property1: "WIFI 7",
            property2: "up to 4.3Gbps"
        },
        {
            name: "Ubiquiti UTR",
            property1: "WIFI 5",
            property2: "up to 866Mbps"
        }
    ];
    const homelab = [
        {
            name: "HP Prodesk 600 G3 mini",
            property1: "Unraid",
            property2: "i5-8500T"
        },
        {
            name: "Intel NUC",
            property1: "Proxmox",
            property2: "i5-7300U"
        },
        {
            name: "Intel NUC",
            property1: "Home Assistant",
            property2: "i3-7100U"
        }
    ];
    const site = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Projects",
      url: "/projects"
    },
    {
      name: "About Me",
      url: "/about"
    },
    {
      name: "CV",
      url: "/cv"
    }
  ];
  return (
    <>
      <TopBar text_right="HARDWARE"/>
      <List name="DAILY DRIVERS" items={dailyDrivers}/>
      <List name="PERIPHERALS" items={peripherals}/>
      <List name="NETWORKING" items={networking}/>
      <List name="HOMELAB" items={homelab}/>
      <Links name="SITE" links={site}/>
    </>
  );
}
