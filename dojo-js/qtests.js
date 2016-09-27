// samples
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" )
})
QUnit.test('test 2 pow 3 ', function (assert) {
  assert.equal( 2*2*2, 8)
})
QUnit.test('test array of array elements', function (assert) {
  assert.deepEqual([['oi',2]], [['oi',2]])
})

// power.js
QUnit.test('testPow1and1', function (assert) {
  assert.equal(power(1, 1), 1)
})
QUnit.test('testPow2and1', function (assert) {
  assert.equal(power(2, 1), 2)
})
QUnit.test('testPow2and2', function (assert) {
  assert.equal(power(2, 2), 4)
})
QUnit.test('testPow3and2', function (assert) {
  assert.equal(power(3, 2), 9)
})
QUnit.test('testPow4and4', function (assert) {
  assert.equal(power(4, 4), 256)
})
QUnit.test('testPow2and3', function (assert) {
  assert.equal(power(2, 3), 8)
})
QUnit.test('testPow2and10', function (assert) {
  assert.equal(power(2, 10), 1024)
})



// dojo styling
QUnit.done(function (details) {
  var body = document.getElementsByTagName('body')[0]
  if (details.failed > 0) {
    body.style = 'background-color: red;'
  } else {
    body.style = 'background-color: green;'
  }
})