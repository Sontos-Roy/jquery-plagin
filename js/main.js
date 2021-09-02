const vis = (function () {
      let stateKey,
        eventKey,
        keys = {
          hidden:"visibilitychange",
          webkitHidden:"webkitvisibilitychange",
          mozHidden:"mozvisibilitychange",
          msHidden:"msvisibilitychange"
        };
      for (stateKeyin keys) {
        if (stateKeyin document) {
          eventKey = keys[stateKey];
          break;
        }
      }
      return function (c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
      }
    })();
