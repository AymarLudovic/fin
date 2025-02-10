interface AppConfig {
  appName: string;
  apiUrl: string;
  design: string;
  features: string;
  pages: string;
}

interface App {
  config: AppConfig;
  generateClone(): AppClone;
}

interface AppClone {
  name: string;
  apiUrl: string;
  design: string;
  features: string;
  pages: string;
}