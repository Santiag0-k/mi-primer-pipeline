const { sumar } = require('./app');

function correrTests() {
  console.log('🧪 Corriendo tests...');

  // Test 1
  const resultado1 = sumar(2, 3);
  if (resultado1 === 5) {
    console.log('✅ Test 1 pasó: sumar(2, 3) = 5');
  } else {
    console.error('❌ Test 1 falló: esperaba 5, recibió ' + resultado1);
    process.exit(1);
  }

  // Test 2
  const resultado2 = sumar(0, 0);
  if (resultado2 === 0) {
    console.log('✅ Test 2 pasó: sumar(0, 0) = 0');
  } else {
    console.error('❌ Test 2 falló: esperaba 0, recibió ' + resultado2);
    process.exit(1);
  }

  console.log('🎉 Todos los tests pasaron!');
}

correrTests();
