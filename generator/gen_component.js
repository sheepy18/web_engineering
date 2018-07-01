{
    let component = {
        name: 'generator',

        ccm: {
            url: 'https://ccmjs.github.io/ccm/ccm.js'
        },

        config: {
            tableID: '%tableID%'
        },
        
        
        Instance: function () {
                const self = this;

                self.init = callback => {

                    ccm.load( './generator.js' );

                    if( self.inner ) {
                        [...self.inner.children].forEach( child => {
                            if( child.tagName && child.tagName === 'TABLEID') {
                                self.tableID = child.getAttribute('id');
                            }
                        });
                    }


                    callback();
                };

                self.start = callback => {

                    let genPrim = genPrimNum( 2 ) ;
                    let genSquare = genSquareNum( 0 );
                    let genEven = genEvenNumber( 0 );

                    let collectedPrimNums = [];
                    let collectedSquareNums = [];
                    let collectedEvenNums =  [];

                    let genPrint = genPrintNums(document.getElementById( self.tableID ) , collectedEvenNums, collectedSquareNums, collectedPrimNums);


                    requestAnimationFrame(() => {
                        exec( genPrim, collectedPrimNums );
                        exec( genSquare, collectedSquareNums );
                        exec( genEven, collectedEvenNums );
                    } );

                    print( genPrint, new Date() );

                    callback && callback();
                };
        }
    };
    function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}

}