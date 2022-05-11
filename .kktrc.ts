import rawModules from '@kkt/raw-modules';
import lessModules from '@kkt/less-modules';
import { Configuration } from "webpack"
import { LoaderConfOptions } from 'kkt';
export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = rawModules(conf, env, {
    ...options,
  });

  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
