import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: string;
  }
}
