const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const DEFAULTS = {
    COLOR: 'blue',
    RADIUS: 5
};

function Asteroid(opt){
    MovingObject.call(this, {
        pos: opt['pos'],
        vel: Util.randomVec(10),
        color: DEFAULTS['COLOR'],
        radius: DEFAULTS['RADIUS']
    })
};


Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;