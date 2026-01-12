export interface NavItem {
  label: string;
  href: string;
}

export interface Artist {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface MenuItem {
  category: string;
  items: {
    name: string;
    price: string;
    desc?: string;
  }[];
}