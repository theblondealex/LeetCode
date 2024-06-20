class Calculator {
  public currVal: number;
  constructor(value: number) {
    this.currVal = value;
  }

  add(value: number): Calculator {
    this.currVal += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.currVal -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.currVal = this.currVal * value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.currVal = this.currVal / value;
    return this;
  }

  power(value: number): Calculator {
    this.currVal = this.currVal ** value;
    return this;
  }

  getResult(): number {
    return this.currVal;
  }
}
