export const dispatchActionPromise = (store, action) => (
  new Promise((res) => {
    const unsubscribe = store.subscribe(() => {
      unsubscribe();
      res();
    });
    store.dispatch(action);
  })
);
