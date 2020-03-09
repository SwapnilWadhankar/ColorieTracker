//local storage controller

//Item controller
const ItemCtrl = (function() {
  // Constructor
  const Item = function(id, name, colories) {
    this.id = id;
    this.name = name;
    this.colories = colories;
  };

  //Data structure
  const data = {
    items: [
      { id: 0, name: "Steak-Dinner", colories: 1200 },
      { id: 0, name: "Chicken-biryani", colories: 1300 },
      { id: 0, name: "Eggs", colories: 400 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //Public methods
  return {
    logData: function() {
      return data;
    }
  };
})();

//UI controller
const UICtrl = (function() {})();

//App controller

const APP = (function(ItemCtrl, UICtrl) {
  return {
    init: function() {
      console.log("App intializing .....");
    }
  };
})(ItemCtrl, UICtrl);

APP.init();
