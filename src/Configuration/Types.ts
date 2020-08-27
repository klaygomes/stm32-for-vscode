export interface OpenOCDOptions {
  file?: string | string[],
  search?: string,
  debug?: 0,
  log_output?: string
}

export interface GCCOptions {

}

export interface MakeOptions {

}

export interface Configuration {
  openocd: {
    path: string,
    options?: OpenOCDOptions
  }
  make: {
    path: string,
    options?: MakeOptions
  }
  gcc: {
    path: string,
    options?: GCCOptions
  }
}
