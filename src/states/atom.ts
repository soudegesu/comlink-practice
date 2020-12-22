import { atom } from 'recoil';
import { Sample } from '../worker/sample.worker';

export const workerAtom = atom<Sample | undefined>({
  key: 'worker',
  default: undefined,
  dangerouslyAllowMutability: true,
});
