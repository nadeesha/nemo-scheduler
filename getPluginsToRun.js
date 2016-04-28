import superagent from 'superagent';

export default function () {
  return new Promise((resolve, reject) => {
    superagent
      .get(`${process.env.NEMO_URI}/api/plugs/runnable`)
      .end((err, response) => {
        if (err) {
          return reject(err);
        }

        return resolve(response.body.plugs);
      });
  });
}
