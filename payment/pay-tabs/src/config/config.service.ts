import { DefaultConfig } from "../../config/default";
import { ReadonlyDeep } from "../types/ReadonlyDeep";

import config from "config";
export const configs: ReadonlyDeep<DefaultConfig> = config as any;
