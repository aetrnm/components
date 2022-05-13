import {
  WebAppComponent,
  WebAppComponentConfig,
  WebAppComponentProps,
} from "../component.ts";
import { BASE_URL } from "../config.ts";

export interface QrScannerProps extends WebAppComponentProps {
  sendButtonText?: string;
}

export class QrScanner<
  P extends QrScannerProps,
  C extends WebAppComponentConfig
> extends WebAppComponent<P, C> {
  constructor(props?: P, config?: C) {
    const defaultConfig: WebAppComponentConfig = {
      baseUrl: BASE_URL,
      name: "qr-scanner",
    };

    super(props, Object.assign(defaultConfig, config));
  }
}
