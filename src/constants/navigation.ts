export interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Docs",
    url: "#docs",
  },
  {
    id: "1",
    title: "Products",
    url: "#products",
  },
  {
    id: "2",
    title: "About",
    url: "#about",
  },
  {
    id: "3",
    title: "Pre-Order",
    url: "#preorder",
  },
  {
    id: "4",
    title: "Sign up",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];
