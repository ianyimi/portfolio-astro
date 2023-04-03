import { map } from 'nanostores';

export interface ScrollStore {
  top: number;
  progress: number;
}

export const scrollState = map<ScrollStore>({
  top: 0,
  progress: 0,
});
