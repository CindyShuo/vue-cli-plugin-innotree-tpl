module.exports = [
  {
    name: 'replaceTemplates',
    type: 'confirm',
    message: 'Use Innotree templates? ',
    default: true
  },
  {
    name: "vuex",
    type: "confirm",
    message: `是否需要使用 vuex`,
    default: true
  },
  {
    name: "elementUI",
    type: "confirm",
    message: `是否需要使用 element-ui`,
    default: true
  }
];
