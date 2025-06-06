//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance = null
  
  open() {
    this.throwIfOpened()
    this.#balance = 0
  }

  close() {
    this.throwIfClosed()
    this.#balance = null
  }

  deposit(sum) {
    this.throwIfClosed()
    if (sum < 0) throw new ValueError();
    this.#balance += sum;
  }
  withdraw(sum) {
    this.throwIfClosed()
    if (sum < 0 || sum > this.#balance) throw new ValueError();
    this.#balance -= sum;
  }

  get balance() {
    this.throwIfClosed()
    return this.#balance  
  }

  set balance(sum) {
    this.throwIfOpened()
    this.#balance = sum
  }

  throwIfOpened() {
    if (this.#balance !== null) throw new ValueError()
  }
  
  throwIfClosed() {
    if (this.#balance === null) throw new ValueError()
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
