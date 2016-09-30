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

// mictorios.js
/*
QUnit.test('teste 1 mic vazio 1 mij', function (assert) {
  assert.deepEqual(podemMijar([false], 1), true)
})

QUnit.test('teste 1 mic ocupado 1 mij', function (assert) {
  assert.deepEqual(podemMijar([true], 1), false)
})

QUnit.test('teste 0 mic no banheiro 1 mij', function (assert) {
  assert.deepEqual(podemMijar([], 1), false)
})

QUnit.test('teste 2 mic vazios 2 mij', function (assert) {
  assert.deepEqual(podemMijar([false, false], 2), false)
})

QUnit.test('teste 2 mic vazios 2 mij', function (assert) {
  assert.deepEqual(podemMijar([false, true, false], 1), false)
})*/

QUnit.test('Teste um mictorio no banheiro e um disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([false]), [0])
})

QUnit.test('Teste um mictorio no banheiro e nenhum disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([true]), [])
})

QUnit.test('Teste dois mictorios no banheiro e dois disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false]), [0])
})

QUnit.test('Teste dois mictorios no banheiro e um disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([true, false]), [])
})

QUnit.test('Teste dois mictorios no banheiro e o primeiro disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([false, true]), [])
})

QUnit.test('Teste dois mictorios no banheiro e dois ocupados', function (assert) {
  assert.deepEqual(ondePodemMijar([true, true]), [])
})

QUnit.test('Teste tres mictorios no banheiro e tres disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false, false]), [0, 2])
})

QUnit.test('Teste tres mictorios no banheiro e dois disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([true, false, false]), [2])
})

QUnit.test('Teste tres mictorios no banheiro e um disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([true, true, false]), [])
})

QUnit.test('Teste tres mictorios no banheiro e nenhum disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([true, true, true]), [])
})

QUnit.test('Teste tres mictorios no banheiro e dois disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, true, false]), [])
})

QUnit.test('Teste tres mictorios no banheiro e um disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([true, false, true]), [])
})

QUnit.test('Teste tres mictorios no banheiro e um disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([false, true, true]), [])
})

QUnit.test('Teste quatro mictorios no banheiro e todos disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false, false, false]), [0,2])
})

QUnit.test('Teste quatro mictorios no banheiro e tres disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false, false, true]), [0])
})

QUnit.test('Teste quatro mictorios no banheiro e tres disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false, false, true]), [0])
})

QUnit.test('Teste quatro mictorios no banheiro e tres disponiveis', function (assert) {
  assert.deepEqual(ondePodemMijar([false, true, false, false]), [3])
})


/*QUnit.test('Teste um mictorio no banheiro e um disponivel', function (assert) {
  assert.deepEqual(ondePodemMijar([false, false, false]), [0,2]])
})*/

// dojo styling. Do not edit

QUnit.done(function (details) {
  var body = document.getElementsByTagName('body')[0]
  if (details.failed > 0) {
    body.style = 'background-color: red;'
  } else {
    body.style = 'background-color: green;'
  }
})