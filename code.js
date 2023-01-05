var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

calle1 = createSprite(190,120,420,3)
calle2 =createSprite(190,260,420,3)
rayomaquine = createSprite(20, 190,13,13);
rayomaquine.shapeColor="red";
var dinoco = createSprite(100,130,10,10);
dinoco.shapeColor="blue";
var chick = createSprite(215,130,10,10);
chick.shapeColor="green"
dinoco.velocityY=10;
chick.velocityY=10;
// variable que almacena las vidas
life=0;
function draw() {
background("white")
 // texto donde se muestran las vidas
  textSize(20);
  text("Vidas "+life, 150, 30);
  fill("yellow");
  noStroke();
  rect(0, 120, 52, 140);
 fill("lightblue");
 noStroke();
 rect(345, 120, 52, 140);
 // para que los carros choquen con las calles
  dinoco.bounceOff(calle1);
  dinoco.bounceOff(calle2);
  chick.bounceOff(calle1);
  chick.bounceOff(calle2);
    // para que rayomaquine se mueva en la calle
  if (keyDown("right")) {
    rayomaquine.x=rayomaquine.x+7;
  }
  if (keyDown("left")) {
    rayomaquine.x=rayomaquine.x-7;
  }
  // esto es para que rayomaquine se regrese a su punto inicial
  if (rayomaquine.isTouching(dinoco)|| (rayomaquine.isTouching(chick))) {
    rayomaquine.x=20;
    rayomaquine.y=190;
    life=life+1;
  }
    drawSprites();
}

  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
