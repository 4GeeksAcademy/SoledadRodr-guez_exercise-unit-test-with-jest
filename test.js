const { sum } = require('./suma.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./conversordemoneda.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yens", function() {
    const { fromDollarToYen } = require('./conversordemoneda.js');
    const dollars = fromDollarToYen(3.5);
    const expected = ((3.5 * 156.5)/1.07);
    expect(fromDollarToYen(3.5)).toBe(511.92); 
})

test("156.5 yens should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./conversordemoneda.js');
    const dollars = fromYenToPound(35);
    const expected = ((35 * 0.87)/156.5);
    expect(fromYenToPound(35)).toBe(0.19); 
})