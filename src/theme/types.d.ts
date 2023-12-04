import "@emotion/react";

type TPalette = {
  primary: {
    main: string;
  };
  background: {
    main: string;
  };
  typography: {
    main: string;
  };
  button: {
    main: string;
  };
  common: {
    white: string;
    black: string;
  };
};

export interface ITheme {
  palette: TPalette;
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ITheme {}
}
