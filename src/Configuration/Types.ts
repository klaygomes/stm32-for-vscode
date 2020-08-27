export interface OpenOCDOptions {
  file?: string | string[];
  search?: string;
  debug?: 0;
  log_output?: string;
}

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GCCOptions {

}
//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MakeOptions {

}

export interface Configuration {
  openocd: {
    path: string;
    options?: OpenOCDOptions;
  };
  make: {
    path: string;
    options?: MakeOptions;
  };
  gcc: {
    path: string;
    options?: GCCOptions;
  };
}
