import { keyCodesToName, keyNames } from './key-codes';

class Hotkeys {
  constructor() {
    this.hotkeys = {
      ctrl: {},
      shift: {},
      ctrlAlt: {},
      ctrlShift: {},
      keys: {},
    };
  }

  dispatch(e) {
    const keyName = this.getKeyName(e).toLowerCase();
    let handler;

    if (!keyName) return;

    if (this.isKeyEnterExact(e)) {
      handler = this.hotkeys.keys[keyName];
    } else if (this.isCtrlEnterExact(e)) {
      handler = this.hotkeys.ctrl[keyName];
    } else if (this.isShiftEnterExact(e)) {
      handler = this.hotkeys.shift[keyName];
    } else if (this.isCtrlAltEnterExact(e)) {
      handler = this.hotkeys.ctrlAlt[keyName];
    } else if (this.isCtrlShiftEnterExact(e)) {
      handler = this.hotkeys.ctrlShift[keyName];
    }

    if (handler) {
      e.preventDefault();
      handler(e);
    }
  }

  isKeyEnterExact(e) {
    return !this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  }

  isCtrlShiftEnterExact(e) {
    return this.isCtrlEnter(e) && this.isShiftEnter(e) && !this.isAltEnter(e);
  }

  isCtrlAltEnterExact(e) {
    return this.isCtrlEnter(e) && this.isAltEnter(e) && !this.isShiftEnter(e);
  }

  isCtrlEnterExact(e) {
    return this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
  }

  isShiftEnterExact(e) {
    return this.isShiftEnter(e) && !this.isCtrlEnter(e) && !this.isAltEnter(e);
  }

  isCtrlEnter(e) {
    return e.ctrlKey || e.metaKey;
  }

  isShiftEnter(e) {
    return e.shiftKey;
  }

  isAltEnter(e) {
    return e.altKey;
  }

  registerHotkeys({ modifier, key, action }) {
    if (modifier) {
      this.hotkeys[modifier][key] = action;
    } else {
      this.hotkeys.keys[key] = action;
    }
  }

  getKeyName(e) {
    const { key, keyCode } = e;

    if (key !== undefined) {
      const keyName = Object.keys(keyNames).find((keyName) => {
        const validNames = keyNames[keyName];

        return typeof validNames === 'string' ? validNames === key : validNames.indexOf(key) !== -1;
      });

      return keyName || key;
    }

    return keyCodesToName[keyCode];
  }
}

export default Hotkeys;
