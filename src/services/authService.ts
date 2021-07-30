export const JOHNY_BRAVO = {
  id: 1,
  name: 'Johny Bravo',
  age: 42,
  hobbies: ['women', 'girls', 'ladies', 'teenagers'],
  createdAt: new Date(),
};

export const getUser = () => Promise.resolve(JOHNY_BRAVO)