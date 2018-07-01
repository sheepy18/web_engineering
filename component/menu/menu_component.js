
{
    let component = {
        name: "menu",

        ccm: {
            url: 'https://ccmjs.github.io/ccm/ccm.js'
        },

        config: {

            titles: ['Title1','Title2'],
            contents: ['content1','content2'],
            contentID: 'content-1',
            css: 'menu_style.css',
            color_selected: 'red'

        },

        Instance: function() {
            const self = this;

            this.init = callback => {
                if( !self.inner.children.length ) return callback();

                self.contents = [];
                self.titles = [];


                [...self.inner.children].map( child => {
                        if( child.tagName && child.tagName === 'ITEM') {
                            self.titles.push( child.getAttribute( 'title' ) );
                            self.contents.push( child.innerHTML );
                        } else if( child.tagName && child.tagName === 'CONTAINER') {
                            self.contents[ child.getAttribute('num') - 1] = child.innerHTML;
                        } else if( child.tagName && child.tagName ==='CONTENTID') {
                            self.contentID = child.innerHTML;
                        } else if( child.tagName && child.tagName === 'SELECTED') {
                            self.color_selected = child.getAttribute('color');
                        }
                });

                callback();
            };

            this.start = callback => {

                self.element.innerHTML  = '<div id="container"> </div>';
                let contentDiv = document.getElementById( self.contentID );

                createMenu( self, contentDiv );

                ccm.load({ url: self.css, context: self.element } );

                callback && callback();
            }

        }

    };

    function createMenu( menu, contentDiv ) {
        let self = menu;

        self.titles.forEach( (t,i) => {
            let newDiv = document.createElement('div');
            newDiv.addEventListener('click',() => {
                contentDiv.innerHTML = self.contents[i];

                [...self.element.querySelectorAll('.title')].forEach(
                    (item) => {  item.style.backgroundColor = null; }
                );

                newDiv.style.backgroundColor = self.color_selected ;
            });
            newDiv.innerHTML = t;
            newDiv.setAttribute('class', 'title');

            if(i ===0)
                newDiv.style.backgroundColor = self.color_selected ;

            self.element.querySelector('#container').appendChild( newDiv );


        });

        contentDiv.innerHTML = self.contents[0];
    }

    function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}

}
