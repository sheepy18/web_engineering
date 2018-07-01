function* genEvenNumber(  start ) {
    let num = start;

    while( true ) {
        num++;
        yield num * 2;
    }
}

function * genSquareNum( start ) {
    let num = start;

    while( true ) {
        num++;
        yield  num * num;
    }
}

function* genPrimNum( start ) {
    let num = start;
    let collectedPrimNums = [1];

    while( true ) {

        while( !isPrim( num, collectedPrimNums ) ) {
            num++;
        }

        yield num;
    }
}

function isPrim( num , collectedPrimNums ) {

    for( let i = 1; i < collectedPrimNums.length && isPrim; i++ ) {
        if( !(num  %  collectedPrimNums[i]) ) {
                return false;
        }
    }
    collectedPrimNums.push( num );

    return true;
}

function exec( generator, container ) {
    container.push( generator.next().value );
    requestAnimationFrame( () => { exec( generator, container ); });
}

function* genPrintNums(element,evenNums,squareNums, primNums ) {
    let i = 0;
    while( true ) {
        element.innerHTML +=   '<tr><td>' + (i  + 1) + '</td>'
                                + '<td>' + evenNums[i]   +'</td>'
                                + '<td>' + squareNums[i]   +'</td>'
                                +'<td>' + primNums[i]   +'</td></tr>';
        i++;
        yield;
    }
}

function print( generator, date ) {
    let newDate = new Date();
    let sec = newDate.getSeconds() - date.getSeconds();

    if( sec > 0)
        generator.next(); //Ausgabe

    setTimeout(() => { print( generator, newDate ); },1000);
}

/* Usage:

let genPrim = genPrimNum( 2 ) ;
let genSquare = genSquareNum( 0 );
let genEven = genEvenNumber( 0 );

let collectedPrimNums = [];
let collectedSquareNums = [];
let collectedEvenNums =  [];

let genPrint = genPrintNums(document.getElementById('shownums') , collectedEvenNums, collectedSquareNums, collectedPrimNums);


requestAnimationFrame(() => {
    exec( genPrim, collectedPrimNums );
    exec( genSquare, collectedSquareNums );
    exec( genEven, collectedEvenNums );
} );

 print( genPrint, new Date() );

 */