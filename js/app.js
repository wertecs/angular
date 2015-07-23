(function () {
    var app = angular.module("store", []);

    app.controller("StoreController", function () {
        this.products = gems;
    });

    app.controller("TabController", function () {
        this.tab = 1;

        this.setTab = function(tab)
        {
            console.log("Setting tab to " +tab);
            this.tab =tab;
        };

        this.isSet = function(tab)
        {
            return tab === this.tab;
        };

        this.getIndex = function(el)
        {
            if (el.target)
            {
                console.log(el.target);
                console.log(el.currentTarget);
               var ele =  el.target;
                console.log(ele.parentNode);
               return $(ele).index(ele.parentNode);
            }
            console.log("Not an event" + $(el).index(el.parentNode));
          return $(el).index(el.parentNode);
        };

    });

    var gems = [
        {
            name: 'Delicate Bloodstone',
            price: 110.50,
            canPurchase: true,
            soldOut: false,
            image: "img/delicate_bloodstone.png",
            thumb: "img/delicate_bloodstone_thumb.png"
        },
        {
            name: 'Scarlet Ruby',
            price: 119.50,
            canPurchase: false,
            soldOut: true,
            image: "img/scarlet_ruby.png",
            thumb: "img/scarlet_ruby_thumb.png"
        }

    ];
})();