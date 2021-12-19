import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.company.appname",
  appName: "react-capacitor-stater",
  webDir: "build",
  bundledWebRuntime: true,
  server: {
    allowNavigation: ["google.com"]
  }
};

export default config;
