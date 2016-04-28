import getPluginsToRun from './getPluginsToRun.js';
import invokePlugs from './invokePlugs.js';

setInterval(() => {
  getPluginsToRun()
    .then(invokePlugs)
    .catch(console.error);
}, 1000 * 60 * 15);
