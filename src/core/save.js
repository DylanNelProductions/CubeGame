const STORAGE_KEY = 'color-swipe-3d-save';

export const SaveManager = {
  getData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return {
      maxLevel: 1,
      currentLevel: 1,
      gamertag: null // Add gamertag field
    };
  },

  saveData(maxLevel, currentLevel, gamertag) {
    const data = {
      maxLevel: maxLevel,
      currentLevel: currentLevel,
      gamertag: gamertag
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  unlockLevel(level) {
    const data = this.getData();
    if (level > data.maxLevel) {
      data.maxLevel = level;
      this.saveData(data.maxLevel, data.currentLevel, data.gamertag);
    }
  },

  setCurrentLevel(level) {
    const data = this.getData();
    data.currentLevel = level;
    this.saveData(data.maxLevel, data.currentLevel, data.gamertag);
  },

  setGamertag(gamertag) {
    const data = this.getData();
    data.gamertag = gamertag;
    this.saveData(data.maxLevel, data.currentLevel, data.gamertag);
  },

  resetData() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
