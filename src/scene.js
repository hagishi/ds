
class Scene {

  constructor(element) {
    this.$el = $(element);
    this.timerId;
  }

  ready() {
    console.log('ready')
  }

  start() {
    console.log('start');
  }

  end() {
    clearTimeout(this->timerId);
    console.log('end');
  }

  close() {
    console.log('close');
  }

}