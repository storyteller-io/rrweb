import record from './record';
import { Replayer } from './replay';
import { mirror, mirror2 } from './utils';
import * as utils from './utils';
export { EventType, IncrementalSource, MouseInteractions, ReplayerEvents, } from './types';
declare const addCustomEvent: <T>(tag: string, payload: T) => void;
declare const freezePage: () => void;
export { record, addCustomEvent, freezePage, Replayer, mirror, mirror2, utils };
