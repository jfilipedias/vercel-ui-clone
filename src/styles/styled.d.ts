/* eslint @typescript-eslint/no-empty-interface: "off" */
/* eslint @typescript-eslint/naming-convention: "off" */

import "styled-components";

import theme from "./theme";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
