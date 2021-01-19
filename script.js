const bodyElement = document.querySelector("body");

let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state = 1;
    } else {
      this.state = 0;
    }
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src =
        "C:Userscongrkenzie-projects\11-12-2020-coin-flipimagesQuarter-Heads.jpg";
    } else {
      image.src =
        "C:Userscongrkenzie-projects\11-12-2020-coin-flipimagesQuarter-Tails-2.jpg";
    }
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};
function dipslay20Flips() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toString());
    document.write("<br>");
    coin.state = 0;
  }
}
/* uses a loop to flip the coin 20 times. 
Each time the coin flips, display the result of each flip 
as a string on the page (make use of your toString() method)*/

function display20Images() {
  for (i = 0; i < 20; i++) {
    coin.flip();
    bodyElement.append(coin.toHTML());
    document.write("<br>");
    coin.state = 0;
  }
}
/*again using a loop to flip the coin 20 times…but this time 
instead of displaying the result as a string, display the result 
of each flip as an HTML IMG element on the page 
(make use of your toHTML() method). */
dipslay20Flips();
display20Images();
