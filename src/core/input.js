export class InputManager {
  constructor() {
    this.startX = 0;
    this.startY = 0;
    this.threshold = 50; // Minimum distance for a swipe
    this.listeners = [];

    this.init();
  }

  init() {
    window.addEventListener('touchstart', this.handleTouchStart.bind(this));
    window.addEventListener('touchend', this.handleTouchEnd.bind(this));
    window.addEventListener('mousedown', this.handleMouseDown.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  onSwipe(callback) {
    this.listeners.push(callback);
  }

  emitSwipe(direction) {
    this.listeners.forEach(cb => cb(direction));
  }

  handleTouchStart(e) {
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
  }

  handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    this.processSwipe(endX, endY);
  }

  handleMouseDown(e) {
    this.startX = e.clientX;
    this.startY = e.clientY;
  }

  handleMouseUp(e) {
    this.processSwipe(e.clientX, e.clientY);
  }

  processSwipe(endX, endY) {
    const diffX = endX - this.startX;
    const diffY = endY - this.startY;

    if (Math.abs(diffX) < this.threshold && Math.abs(diffY) < this.threshold) {
      return; // Tap, not swipe
    }

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal
      if (diffX > 0) {
        this.emitSwipe('right');
      } else {
        this.emitSwipe('left');
      }
    } else {
      // Vertical
      if (diffY > 0) {
        this.emitSwipe('down'); // Screen down is usually positive Y
      } else {
        this.emitSwipe('up');
      }
    }
  }
}

