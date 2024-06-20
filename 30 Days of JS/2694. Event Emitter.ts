type Callback = (...args: any[]) => any;

type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  eventMap = {};

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.eventMap.hasOwnProperty(eventName)) {
      this.eventMap[eventName] = new Set();
    }
    this.eventMap[eventName].add(callback);
    return {
      unsubscribe: () => {
        this.eventMap[eventName].delete(callback);
      },
    };
  }

  emit(eventName, args = []) {
    const res = [];
    const callbacks = this.eventMap[eventName] ?? [];
    for (const callback of callbacks) {
      res.push(callback(...args));
    }
    return res;
  }
}

// const emitter = new EventEmitter();

// function onClickCallback() {
//   console.log("log");
//   return 99;
// }

// const sub = emitter.subscribe("onClick", onClickCallback);

// emitter.emit("onClick"); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit("onClick"); // []
