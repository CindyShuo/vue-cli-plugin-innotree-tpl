function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.0",
      "babel-polyfill": "^6.26.0",
    },
    devDependencies: {
      "qs": "^6.5.2",
      "style-resources-loader": "^1.2.1",
    }
  })
}

function renderFiles (api, opts) {
  // Render files if we're replacing
  const fs = require('fs');
  const routerPath = api.resolve('./src/router.js');
  opts.router = fs.existsSync(routerPath);

  // 配置
  if (opts.replaceTemplates) {
    api.render(files => {
      Object.keys(files)
        .filter(name => name.startsWith('src/'))
        .forEach(name => delete files[name])
    })
    api.render('./templates/default');
    if (opts.router) {
      // 替换掉路由文件
      api.render('./templates/router')
    }
  }

  // 安装 vuex
  if (opts.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: '^3.0.1'
      }
    });
    api.render('./template/vuex');
  }

  // 安装 element-ui 库
  if (opts.elementUI) {
    api.extendPackage({
      devDependencies: {
        "element-ui": "^2.7.2",
        "vue-cli-plugin-element": "^1.0.0",
        "babel-plugin-component": "^1.1.1"
      }
    });
    api.render('./templates/el')
  }

  // 配置文件
  api.render({
    './.eslintrc.js'     : './templates/_eslintrc.js',
    './.gitignore'       : './templates/_gitignore'
  });
}

module.exports = (api, opts) => {
  addDependencies(api);
  renderFiles(api);
};
