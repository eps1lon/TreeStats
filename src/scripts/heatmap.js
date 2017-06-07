import store from '../browser/store/store';

const done = new Promise((fulfill, reject) => {
  store.subscribe(() => {
    console.log(store.getState().toJS());
  });
});

(async () => {
  await done;
})();
