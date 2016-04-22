import superagent from 'superagent';

export default function () {
  return new Promise((resolve, reject) => {
    const where = {
      nextRunAfter: {
        gte: Date.now(),
      },
    };

    const filter = ({where}).toString();

    superagent
      .get(`${NEMO_URI}/api/plugins?filter=${filter}`)
      .end((err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result);
      });
  });
}