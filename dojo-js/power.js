var power = function (base, power) {
  var pow = base
  while (--power) pow *= base
  return pow
}