import TreeTransfer from './src/main.vue';

/* istanbul ignore next */
TreeTransfer.install = function(Vue) {
  Vue.component(TreeTransfer.name, TreeTransfer);
};

export default TreeTransfer;
