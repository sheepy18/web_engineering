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

            self.init = callback => {

               callback();
            };


            self.start = callback => {

                callback && callback();
            };

        }

    };
}