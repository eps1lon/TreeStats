const { Chromeless } = require('chromeless');

/**
 * remote control for TreeStatsapp with headless chrome
 */
class RemotePage extends Chromeless {
  /**
   * @param {string} url
   */
  constructor(url) {
    super({
      viewport: {
        width: 1920,
        height: 1600,
      },
    });

    this.url = url;
  }

  /**
   * @param {string} league
   * @return {RemotePage}
   */
  filterLeague(league) {
    this.navigateTab('data_filter');

    this.evaluate((selector, option) => {
      return new Promise((resolve) => {
        const select = document.querySelector(selector);

        if (select) {
          select.value = option;
          select.addEventListener('change', (event) => {
            resolve(event.target.selectedIndex);
          });

          const change_event = new Event('change', {
            'view': window,
            'bubbles': true,
            'cancelable': false,
          });
          select.dispatchEvent(change_event);

          return select.selectedIndex;
        } else {
          resolve(false);
        }
      });
    }, '#data_filter-league', league);

    this.waitReady();

    return this;
  }

  /**
   * @return {RemotePage}
   */
  gotoMain() {
    this.goto(this.url + '?clean');

    return this;
  }

  /**
   * @param {string} source
   * @return {RemotePage}
   */
  loadSource(source) {
    this.navigateTab('data');

    this.evaluate((selector, option) => {
      return new Promise((resolve) => {
        const select = document.querySelector(selector);

        if (select) {
          select.value = option;
          select.addEventListener('change', (event) => {
            resolve(event.target.selectedIndex);
          });

          const change_event = new Event('change', {
            'view': window,
            'bubbles': true,
            'cancelable': false,
          });
          select.dispatchEvent(change_event);

          return select.selectedIndex;
        } else {
          resolve(false);
        }
      });
    }, '.data-sources', source);

    this.waitReady();

    return this;
  }

  /**
   * @param {string} tab
   * @return {RemotePage}
   */
  navigateTab(tab) {
    const waitFor = {
      data: '.data-sources',
      data_filter: '#data_filter-league',
    };

    this
      .click(`.nav.nav-tabs a[data-toggle="${tab}"]`)
      .wait(waitFor[tab]);

    return this;
  }

  /**
   * @return {RemotePage}
   */
  waitReady() {
    // nprogress is easing out on done. no way to hide immediately
    this.wait(50).wait('#app-ready').wait(500);

    return this;
  }

  /**
   * @return {Promise<string[]>}
   */
  async availableSources() {
    this.navigateTab('data');

    return await this
      .evaluate(() => {
        return [...document
          .querySelectorAll('.data-sources option')
          .values()]
          .map((option) => option.value);
      });
  }

  /**
   * @return {Promse<string[]>}
   */
  async availableLeagues() {
    this.navigateTab('data_filter');

    return await this
      .evaluate(() => {
        return [...document
          .querySelectorAll('#data_filter-league option')
          .values(),
        ].map((option) => {
          return {
            human: option.innerHTML,
            value: option.value,
          };
        });
      });
  }
}

module.exports = RemotePage;
