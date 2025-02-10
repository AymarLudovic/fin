interface Application {
  pages: Page[];
  features: Feature[];
  design: Design;
}

interface Page {
  name: string;
  components: Component[];
}

interface Component {
  name: string;
  type: string;
  properties: Property[];
}

interface Property {
  name: string;
  type: string;
  value: any;
}

interface Feature {
  name: string;
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  name: string;
  type: string;
  value: any;
}

interface Design {
  colors: Color[];
  fonts: Font[];
  images: Image[];
}

interface Color {
  name: string;
  hex: string;
}

interface Font {
  name: string;
  family: string;
  size: number;
}

interface Image {
  name: string;
  path: string;
}