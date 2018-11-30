"use strict";

// -----------  String ---------- //

let string_arrey = ['my','test','string','arrey' ],
    strings ='need string',
    need = 'need'

//       string.length //

test('String', () => {
    expect(string_arrey.length).toEqual(4);  //  +
    expect(string_arrey[1]).toEqual('test');  //+
    expect(string_arrey[3]).toEqual('arrey');  //+
    expect(String.fromCodePoint(65, 66,67)).toEqual('ABC');  //+
    expect(String.fromCodePoint( 64 ,32)).toEqual('@ ');  //+
    expect(string_arrey[0] + " " + string_arrey[1] ).toEqual('my test'); //+
    expect(strings.search('s') ).toEqual( 5); //+
    expect(strings.search(need) ).toEqual( 0); //+
    expect( strings.indexOf(need) ).toEqual(0 ); //+
    expect( strings.indexOf('ing') ).toEqual(8 ); //+
    expect(strings.slice(0,4)  ).toEqual(need); //+
    expect( string_arrey[2].slice(0,5) ).toEqual(strings.slice(5,10) ); // 0_0  ++
    expect(strings.replace('string','love') ).toEqual('need love'); //+
    expect(strings.split(" ") ).toEqual( [need ,'string']); //+

});

// ---------- Numbers --------------//

let numb =215
test('Numbers', () => {
    expect(5).toEqual(5);
    expect(true).toEqual(true);
    expect( (1024).toString()).toEqual( "1024"); //+
    expect(Math.pow(2, 10)).toEqual(1024 ); //+
    expect( 1024/8 ).toEqual(128 ); //+
     expect( 5 + "5" ).toEqual( "55" ); //+
    expect( "9" +99 ).toEqual( "999"); //+
    expect(Number.isFinite(numb)  ).toEqual(true ); //+
    expect(Number.isFinite (need) ).toEqual(false ); //+
    expect(Number.isInteger(numb/0.3)).toEqual( false); //+
});


test('test_arrays', () => {
    expect(string_arrey.length).toEqual(4);  //  +
     expect(
         
     ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+
    // expect(  ).toEqual( ); //+

});
// expect(  ).toEqual( ); //+
// expect(  ).toEqual( ); //+
// expect(  ).toEqual( ); //+
// expect(  ).toEqual( ); //+
// expect(  ).toEqual( ); //+
// expect(  ).toEqual( ); //+