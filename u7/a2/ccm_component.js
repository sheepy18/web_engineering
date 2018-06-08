
{
  var component = {
    name: "counter",

    ccm: {
        url: 'https://ccmjs.github.io/ccm/ccm.js',
    },

    config: {symbol:"&#9734;"},


    Instance: function() { 
        this.start = callback => {
            var self = this;
            
            function addStar( ) {
                 self.element.querySelector('#starCounter').innerHTML += self.symbol;
            }

            this.element.innerHTML = `<button id="button"> Click me! </button> <div id="starCounter"> </div>`;

            this.element.querySelector('#button').addEventListener("click", addStar);
                
            callback && callback();
        }

    }

  };


  function p(){window.ccm[v].component(component)}var f="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[f])window.ccm.files[f]=component;else{var n=window.ccm&&window.ccm.components[component.name];n&&n.ccm&&(component.ccm=n.ccm),"string"==typeof component.ccm&&(component.ccm={url:component.ccm});var v=component.ccm.url.split("/").pop().split("-");if(v.length>1?(v=v[1].split("."),v.pop(),"min"===v[v.length-1]&&v.pop(),v=v.join(".")):v="latest",window.ccm&&window.ccm[v])p();else{var e=document.createElement("script");document.head.appendChild(e),component.ccm.integrity&&e.setAttribute("integrity",component.ccm.integrity),component.ccm.crossorigin&&e.setAttribute("crossorigin",component.ccm.crossorigin),e.onload=function(){p(),document.head.removeChild(e)},e.src=component.ccm.url}}

}
