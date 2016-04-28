import superagent from 'superagent';
import _ from 'lodash';

function invokePlugin(plug) {
  return new Promise((resolve, reject) => {
    superagent
      .post(`${process.env.INVOKER_URI}/invoke`)
      .send({
        pluginName: plug.plugin.name,
        payload: JSON.parse(plug.options),
        ...(_.pick(plug, ['personId', 'pluginId'])),
      })
      .end((err, response) => {
        if (err) {
          return reject(err);
        }

        return resolve(response);
      });
  });
}

export default function (plugs) {
  const requests = _.map(plugs, p => invokePlugin(p));
  return Promise.all(requests);
}
