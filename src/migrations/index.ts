import * as migration_20260122_221608 from './20260122_221608';
import * as migration_20260124_163435 from './20260124_163435';

export const migrations = [
  {
    up: migration_20260122_221608.up,
    down: migration_20260122_221608.down,
    name: '20260122_221608',
  },
  {
    up: migration_20260124_163435.up,
    down: migration_20260124_163435.down,
    name: '20260124_163435'
  },
];
