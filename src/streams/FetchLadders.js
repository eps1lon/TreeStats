const { Transform } = require('stream');
const request = require('request');

/**
 * partial inverse to ladderApi
 * @param {number} api_url
 * @return {string}
 */
const ladderApiToLeague = (api_url) => {
  return decodeURIComponent(
    api_url.match(
      /http:\/\/api.pathofexile.com\/ladders\/([^?]+)\?.*/)[1]);
};

/**
 * thats a nice try but i dont know how to limit the stream to
 * a max of n requests
 * it should queue the requests and only execute n at a time and then emit those
 */
class FetchLadders extends Transform {
  /**
   * enable object mode
   * @param {*} options
   */
  constructor(options = {}) {
    super(Object.assign(options, { objectMode: true }));
  }

  /**
   * transform url into corresponding api ressource
   * @param {*} url to poe ladder api
   * @param {*} encoding
   * @param {*} callback
   */
  _transform(url, encoding, callback) {
    request(url + '', (error, response, body) => {
      if (error) {
        callback(error);
      } else {
        let body = null;

        try {
          body = JSON.parse(response.body);
        } catch (error) {
          callback(error);
        }

        if (body !== null && typeof body === 'object') {
          const league = ladderApiToLeague(response.request.href);

          callback(null, Object.assign(body, { league }));
        }
      }
    });
  }
};

module.exports = FetchLadders;
