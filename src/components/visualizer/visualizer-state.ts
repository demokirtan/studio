
import type { AnimationStep } from '@/lib/algorithms';

export type State = {
  array: number[];
  animations: AnimationStep[];
  currentStep: number;
  isSorting: boolean;
  isPaused: boolean;
  isSorted: boolean;
  numberOfBars: number;
  animationSpeed: number;
  algorithm: string;
};

export type Action =
  | { type: 'SET_CONFIG'; payload: Partial<Omit<State, 'array' | 'animations'>> }
  | { type: 'START_SORT'; payload: { array: number[], animations: AnimationStep[] } }
  | { type: 'PAUSE_RESUME' }
  | { type: 'STEP_FORWARD' }
  | { type: 'STEP_BACKWARD' }
  | { type: 'RESET'; payload: { array: number[], numberOfBars: number } }
  | { type: 'SORT_COMPLETE' };

export const initialStateFactory = (numberOfBars: number): State => ({
  array: [],
  animations: [],
  currentStep: -1,
  isSorting: false,
  isPaused: false,
  isSorted: false,
  numberOfBars: numberOfBars,
  animationSpeed: 500, // Default to 'Normal' speed in ms
  algorithm: 'bubbleSort',
});

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_CONFIG':
      if (action.payload.numberOfBars && action.payload.numberOfBars !== state.numberOfBars) {
        // When number of bars changes, we need a full reset
        const newArray = [];
        for (let i = 0; i < action.payload.numberOfBars; i++) {
            newArray.push(Math.floor(Math.random() * (500 - 20 + 1)) + 20);
        }
        return { 
          ...initialStateFactory(action.payload.numberOfBars),
          array: newArray,
          numberOfBars: action.payload.numberOfBars,
          animationSpeed: state.animationSpeed,
          algorithm: state.algorithm,
        };
      }
      return { ...state, ...action.payload };
    case 'START_SORT':
      return {
        ...state,
        array: action.payload.array,
        animations: action.payload.animations,
        currentStep: -1, // Start at -1 so first step is 0
        isSorting: true,
        isPaused: false,
        isSorted: false,
      };
    case 'PAUSE_RESUME':
      return { ...state, isPaused: !state.isPaused };
    case 'STEP_FORWARD':
        if(state.currentStep >= state.animations.length - 1) {
            return { ...state, isSorting: false, isPaused: false, isSorted: true };
        }
      return { ...state, currentStep: state.currentStep + 1, isPaused: true };
    case 'STEP_BACKWARD':
        if (state.currentStep <= -1) return state;
        return { ...state, currentStep: state.currentStep - 1, isPaused: true };
    case 'RESET':
      return {
        ...initialStateFactory(action.payload.numberOfBars),
        array: action.payload.array,
        numberOfBars: action.payload.numberOfBars,
        animationSpeed: state.animationSpeed,
        algorithm: state.algorithm,
      };
    case 'SORT_COMPLETE':
      return { ...state, isSorting: false, isPaused: false, isSorted: true };
    default:
      return state;
  }
}
