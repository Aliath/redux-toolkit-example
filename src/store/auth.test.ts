import { JOHNY_BRAVO } from 'services/authService';
import reducer, {clearUser, setUser} from './authSlice'

test('should return the initial state', () => {
  
  expect(reducer(undefined, { type: '' })).toEqual({ user: null });
});

test('should set `user` property once setUser is dispatched', () => {
  expect(
    reducer({ user: null }, setUser(JOHNY_BRAVO))
  ).toEqual({ user: JOHNY_BRAVO });
});

test('should set `user` property to null once clearUser is dispatched', () => {
  expect(
    reducer({ user: JOHNY_BRAVO }, clearUser)
  ).toEqual({ user: null });
});