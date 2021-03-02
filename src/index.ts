import record from './record';
import { Replayer } from './replay';
import { mirror, mirror2 } from './utils';
import * as utils from './utils';

export {
  EventType,
  IncrementalSource,
  MouseInteractions,
  ReplayerEvents,
} from './types';

const { addCustomEvent } = record;
const { freezePage } = record;

export { record, addCustomEvent, freezePage, Replayer, mirror, mirror2, utils };
