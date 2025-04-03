export default <C extends object, M>(C: C, instance: M, propName: string) =>
  new Proxy(C, {
    get: (target, prop) => {
      if (prop === propName) {
        return instance;
      }

      return target[prop as keyof typeof target];
    },
  });
