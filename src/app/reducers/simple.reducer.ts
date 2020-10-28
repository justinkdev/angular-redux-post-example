import {Action} from '@ngrx/store';

export function simpleReducer(state: string = 'Hello world', action: Action) {
  console.log(state, action.type);

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo';
      break;
    case 'FRENCH':
      return state = 'Bonjour le monde';
      break;
    default:
      return state;
  }
}
