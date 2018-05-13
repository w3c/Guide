'use strict';

/**
 * Simple JavaScript library to leverage the W3C API.
 *
 * @namespace Apiary
 */
(function(window) {

  // Pseudo-constants:
  var VERSION            = '2.0.2';
  var BASE_URL           = 'https://api.w3.org/';
  var USER_PROFILE_URL   = 'https://www.w3.org/users/';
  var APIARY_ATTRIBUTE   = 'data-apiary';
  var APIARY_SELECTOR    = `[${APIARY_ATTRIBUTE}]`;
  var TYPE_GROUP_PAGE    = 1;
  var TYPE_USER_PAGE     = 2;
  var MODE_DEBUG         = 'debug';
  var MODE_PRODUCTION    = 'production';
  var PHOTO_VALUE        = {
    large:     2,
    thumbnail: 1,
    tiny:      0
  };

  // “Global” variables:

  /**
   * API key, provided by the user.
   *
   * @alias apiKey
   * @memberOf Apiary
   */
  var apiKey;

  /**
   * Type of page; one of <code>TYPE_GROUP_PAGE</code> or <code>TYPE_USER_PAGE</code>.
   *
   * @alias type
   * @memberOf Apiary
   */
  var type;

  /**
   * ID of the entity being used on the page.
   *
   * @alias gid
   * @memberOf Apiary
   */
  var gid;

  /**
   * “Mode” (either “debug” or “production”; the latter by default).
   *
   * @alias mode
   * @memberOf Apiary
   */
  var mode = MODE_PRODUCTION;

  /**
   * Dictionary of placeholders found on the page, and all DOM elements associated to each one of them.
   *
   * @alias placeholders
   * @memberOf Apiary
   */
  var placeholders = {};

  /**
   * Simple cache of HTTP calls to the API, to avoid redundancy and save on requests.
   *
   * @alias cache
   * @memberOf Apiary
   */
  var cache = {};

  /**
   * Main function, invoked once after the document is completely loaded.
   *
   * @alias process
   * @memberOf Apiary
   */
  var process = function() {
    if (window.removeEventListener)
      window.removeEventListener('load', process);

    else if (window.detachEvent)
      window.detachEvent('onload', process);

    console.log(`Apiary version ${VERSION}`);

    if (1 === document.querySelectorAll('html[data-apiary-key]').length) {
      apiKey = document.querySelectorAll('html[data-apiary-key]')[0].getAttribute('data-apiary-key');
    }
    if (document.querySelectorAll('[data-apiary-group]').length > 0) {
      type = TYPE_GROUP_PAGE;
      gid = document.querySelectorAll('[data-apiary-group]')[0].getAttribute('data-apiary-group');
    }

    if (apiKey && type && gid) {
      console.log('process:\n' + gid);
      callAPIsBasedOnRequiredPlaceholders();

    } else {
      window.alert('Apiary ' + VERSION + '\n' +
        'ERROR: could not get all necessary metadata.\n' +
        'apiKey: “' + apiKey + '”\n' +
        'type: “' + type + '”\n' +
        'gid: “' + gid + '”');
    }

    if (1 === document.querySelectorAll('html[data-apiary-mode]').length) {
      mode = document.querySelectorAll('html[data-apiary-mode]')[0].getAttribute('data-apiary-mode');
    }
  };


/* callAPIsBasedOnRequiredPlaceholders */
  var callAPIsBasedOnRequiredPlaceholders = function() {
    getGrName();
    getGrDescription();

    if (MODE_DEBUG === mode)
      console.debug(`placeholders:\n${JSON.stringify(placeholders)}`);
  };


/* formatEntity */
  var formatEntity = function(entity, expression) {
    var result;

    // @TODO: get rid of these special checks when there's a smarter algorithm for hyperlinks.
    if (expression) {
      result = '<li>';
      result += interpolateString.call(entity, expression);
/*      result += ':L230:'; */
      result += '</li>';

    } else if (entity.hasOwnProperty('_links') && entity._links.hasOwnProperty('homepage') &&
      entity._links.homepage.hasOwnProperty('href') && entity.hasOwnProperty('name')) {

      // It's a group.
      result = '<li>';
      result += '<a href="';
      result += entity._links.homepage.href;
      result += '">';
      result += entity.name;
/*      result += ':L241:'; */
      reslt += '</a></li>';

    } else if (entity.hasOwnProperty('discr') && 'user' === entity.discr &&
      entity.hasOwnProperty('gid') && entity.hasOwnProperty('name')) {

      // It's a user.
      result = '<li>';
      result += '<a href="';
      result += USER_PROFILE_URL;
      result += entity.gid;
      result += '">';
      result += (entity['work-title'] ? entity['work-title'] + ' ' : '');
      result += entity.name;
/*      result += ':L255:'; */
      result += '</a></li>';

    } else if (entity.hasOwnProperty('shortlink') && entity.hasOwnProperty('title')) {
      // Spec:
      result = '<li><a href="' + entity.shortlink;
      result += (entity.description ? '" title="' + escapeHTML(entity.description) : '');
      result += '">' + entity.title;
      result += (entity.shortname ? ' (<code>' + entity.shortname + '</code>)' : '');
/*      result += ':L264:'; */
      result += '</a></li>';

    } else if (entity.hasOwnProperty('name')) {
      result = '<li>';
      result += entity.name;
/*      result += ':L272:'; */
      result += '</li>';

    } else if (entity.hasOwnProperty('title')) {
      result = '<li>';
      result += entity.title;
/*      result += ':L278:'; */
      result += '</li>';

    } else if (entity.hasOwnProperty('href') && entity.hasOwnProperty('title')) {
      result = '<li><a href="';
      result += entity.href;
      result += '">';
      result += entity.title;
/*      result += ':L286:'; */
      result += '</a></li>';

    } else if (entity.hasOwnProperty('href') && entity.hasOwnProperty('name')) {
      result = '<a href="';
      result += entity.href;
      result += '">';
      result += entity.name;
/*      result += ':L294:'; */
      result += '</a>';
    }
    return result;
  };

/* getGrName */
  var getGrName = function() {

    var url;

    url = BASE_URL + 'groups/' + gid;

    if (-1 === url.indexOf('?')) {
      /* url += '?apikey=' + apiKey + '&embed=true'; */
      url += '?apikey=' + apiKey;

    } else {
      /* url += '&apikey=' + apiKey + '&embed=true'; */
      url += '&apikey=' + apiKey;
    }

    console.log('getGrName:\n' + url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('loadend', function(event) {
      console.log('getGrName:\n' + xhr.responseText);

      var result = JSON.parse(xhr.response);
      var i, j;

      for (i of ['_links', '_embedded']) {
        if (result.hasOwnProperty(i)) {
          for (j in result[i]) {
            if (result[i].hasOwnProperty(j)) {
              result[j] = result[i][j];
            }
          }
          delete result[i];
        }
      }
      cache[gid] = result;
      console.log('getGrName:\n' + JSON.stringify(cache[gid]));
      console.log('getGrName:\n' + cache[gid].name);

      document.getElementById("gname").innerHTML = cache[gid].name;
    });
    xhr.send();

  };

/* getGrDescription */
  var getGrDescription = function() {

    var url;

    url = BASE_URL + 'groups/' + gid;

    if (-1 === url.indexOf('?')) {
      /* url += '?apikey=' + apiKey + '&embed=true'; */
      url += '?apikey=' + apiKey;

    } else {
      /* url += '&apikey=' + apiKey + '&embed=true'; */
      url += '&apikey=' + apiKey;
    }

    console.log('getGrDescription:\n' + url);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('loadend', function(event) {
      console.log('getGrName:\n' + xhr.responseText);

      var result = JSON.parse(xhr.response);
      var i, j;

      for (i of ['_links', '_embedded']) {
        if (result.hasOwnProperty(i)) {
          for (j in result[i]) {
            if (result[i].hasOwnProperty(j)) {
              result[j] = result[i][j];
            }
          }
          delete result[i];
        }
      }
      cache[gid] = result;
      document.getElementById("gdescription").innerHTML = cache[gid].description;
    });
    xhr.send();

  };

/* getGrHomepage */
  var getGrHomepage = function() {

    var url;

    url = BASE_URL + 'groups/' + gid;

    if (-1 === url.indexOf('?')) {
      /* url += '?apikey=' + apiKey + '&embed=true'; */
      url += '?apikey=' + apiKey;

    } else {
      /* url += '&apikey=' + apiKey + '&embed=true'; */
      url += '&apikey=' + apiKey;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('loadend', function(event) {

      var result = JSON.parse(xhr.response);
      var i, j;

      for (i of ['_links', '_embedded']) {
        if (result.hasOwnProperty(i)) {
          for (j in result[i]) {
            if (result[i].hasOwnProperty(j)) {
              result[j] = result[i][j];
            }
          }
          delete result[i];
        }
      }
      cache[gid] = result;
      document.getElementById("ghomepage").innerHTML = cache[gid]._links.homepage;
    });
    xhr.send();

  };


  // Process stuff!
  if (window.addEventListener)
    window.addEventListener('load', process);
  else if (window.attachEvent)
    window.attachEvent('onload', process);

})(window);
