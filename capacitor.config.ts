import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.company.appname",
  appName: "Surreal AI",
  webDir: "build",
  bundledWebRuntime: false,
  server: {
    allowNavigation: ["surreal-ai.com"]
  }
};

export default config;
