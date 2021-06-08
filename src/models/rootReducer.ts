import { PizzaState } from './pizza';
import { UserState } from './user';

export interface rootReducerState {
  user: UserState;
  pizza: PizzaState;
}
