import GTable from '../components/GTable';

const useGengUI = (app) => {
  const curApp = app;
  const plugins = (Vue) => {
    Vue.component('GTable', GTable);
  }

  curApp.use(plugins);
  return curApp;
}

export default useGengUI;