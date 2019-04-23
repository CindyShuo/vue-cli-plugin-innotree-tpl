function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "babel-polyfill": "^6.26.0",
      "vue-router": "^3.0.1",
      "vuex": '^3.0.1'
    },
    devDependencies: {
      "qs": "^6.5.2",
      "style-resources-loader": "^1.2.1",
      "element-ui": "^2.7.2",
      "vue-cli-plugin-element": "^1.0.0",
      "babel-plugin-component": "^1.1.1"
    }
  })
}

function renderFiles (api, opts) {
  // 配置
  if (opts.replaceTemplates) {
    api.render(files => {
      Object.keys(files)
        .filter(name => name.startsWith('src/'))
        .forEach(name => delete files[name])
    })
    api.render('./templates/default');
  }

  // 配置文件
  api.render({
    './.eslintrc.js'     : './templates/_eslintrc.js',
    './.gitignore'       : './templates/_gitignore',
    './.env.test'       : './templates/_env.test'
  });
}

module.exports = (api, opts) => {
  addDependencies(api);
  renderFiles(api, opts);
};
