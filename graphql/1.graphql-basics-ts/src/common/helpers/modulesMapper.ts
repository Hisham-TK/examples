export default function modulesMapper(modules: { [key: string]: any }) {
  const mappedModules: any = {};
  for (const moduleName in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, moduleName)) {
      const _module = modules[moduleName];
      // #1
      for (const methodName in _module) {
        if (Object.prototype.hasOwnProperty.call(_module, methodName)) {
          const _method = _module[methodName];
          mappedModules[methodName + moduleName] = _method;
        }
      }

      // #2
      //   for (const methodName of ['create', 'update', 'delete']) {
      //     mappedModules[methodName + moduleName] = (_module as any)[methodName];
      //   }

      // #3
      //   mappedModules['create' + moduleName] = _module.create;
      //   mappedModules['update' + moduleName] = _module.update;
      //   mappedModules['delete' + moduleName] = _module.delete;
    }
  }
  return mappedModules;
}
