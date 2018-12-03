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

//-------------------------//



test('test_arrays', () => {

   string_arrey.push('first'); // добавляем в масив последний элемент
     expect(string_arrey.length).toEqual(5); //+
    /****/
    string_arrey.pop(); // удаляем из  масива последний элемент
    expect(string_arrey.length).toEqual(4);

    string_arrey.shift();  // удалем из масива поервый элемент
    expect(string_arrey[0]).toEqual("test"); // not my
    string_arrey.unshift('your'); // добавляем в масив первый элемент
    expect(string_arrey[0]).toEqual("your"); // not my

    expect(string_arrey.join()  ).toEqual('your,test,string,arrey' ); //+
    expect(string_arrey.join(' ')).toEqual('your test string arrey' ); //+
});

let x = 5,
    y=10;


test('test_compare_operators', () => {
    expect(5+5*5 ).toEqual(30);
    expect( (5+5)*5  ).toEqual(50 ); //+
    expect( 2+5-2/2  ).toEqual(6 ); //+
    expect( 2 != 5 ).toEqual(true ); //+
    expect( x < y  ).toEqual( true); //+
    expect( x+y /x ).toEqual( 7 ); //+
    expect( y*x /y*y > x  ).toEqual( true); //+
    expect( x < y ).toEqual( true ); //+
    expect( false < true  ).toEqual( true ); //+
    expect( false < 1 ).toEqual( true ); //+

});


test('test_equality_comparison_algorithm', () => {
    expect(null != 0).toEqual(true);
    expect(false+true).toEqual(1);
    expect(y /"2").toEqual(5);
    expect(1024 +'number' + 1024).toEqual('1024number1024');
    expect('true' == true).toEqual(false);
    expect('false' === false ).toEqual(false);
    expect(x == '5' ).toEqual(true);
    expect('8bit=' + '1byte').toEqual('8bit=1byte');
});