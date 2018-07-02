
class Clock{

    constructor( element ) {
        this.area = element.querySelector('#clockArea');

        this.createClock();

    }

    createClock() {
            let start = 48;
            this.createHourLines( start );
            this.createMinLines( start );

            this.area.innerHTML += '';
    }

    createMinLines( start ) {

            for( let i= 0; i < 12 * 5; i++) {
                let rotation = 360/(12*5) * i;
                this.area.appendChild(
                    this.createLine(  start, start  - 2.5 , 0.25, `rotate(${rotation})`,'black', 'min' )
                );
            }
        }

    createHourLines( start )
{
    for (let i = 0; i < 12; i++) {
        let rotation = 360 / 12 * i;
        this.area.appendChild(
            this.createLine( start, start - 5, 1, `rotate(${rotation})`, 'black', 'min')
        );
    }
}

    createLine( y1, y2, strokeWidth, transform , strokeColor, classID ) {
        let line = document.createElement('line');

        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('transform', transform);
        line.setAttribute('stroke-width', strokeWidth);
        line.setAttribute('stroke', strokeColor);
        line.setAttribute('class', classID);

        return line;
    }

    start() {
        requestAnimationFrame(() => { this.moveHands( new Date() )});
    }

    moveHands( date ) {
        let currentDate = new Date();

        let secs = currentDate.getSeconds() - date.getSeconds();
        let mins = currentDate.getMinutes() - date.getMinutes();
        let hours = currentDate.getHours() - date.getHours();

        if( secs )
            this.moveSecHand( `rotate(${(180 +(360 / 60  * currentDate.getSeconds()) % 360 )})` );
        if( mins ) ;
             this.moveMinHand( `rotate(${(180 +(360 / 60  * currentDate.getMinutes()) % 360 )})` );
        if( hours ) ;
             this.moveHourHand( `rotate(${(180 +(360 / 12  * currentDate.getHours()) % 360 )})` );

        requestAnimationFrame(() => { this.moveHands( date );});
    }

    moveSecHand( rotation ) {
        document.getElementById('secHand').setAttribute( 'transform', rotation );
    }

    moveMinHand( rotation ) {
        document.getElementById('minHand').setAttribute( 'transform', rotation );
    }

    moveHourHand( rotation ) {
        document.getElementById('hourHand').setAttribute( 'transform', rotation );
    }

}


let c = new Clock( document.getElementById('clocky') );
c.start();