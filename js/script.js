var Nurses = (function () {

    var dataConstants = Object.freeze({
        USER_ID : 0,
        DISPLAY_NAME : 1,
        LOCATION : 2,
        CERTIFICATION_NUMBER : 3,
        YEARS_EXP : 4,
        SPECIALTY : 5,
        BIO : 6,
        RESUME : 7,
        IMAGE : 8,
        PHONE_NUM : 9,
        EMAIL : 10,
        RATING : 11,
        RATE : 12,
        AVAILABILITY : 13,
        TAGLINE : 14
    });

    var init = function () {

        // Append the main container (#ns-container)
        $('body').append(Handlebars.partials['container']());

        var $container = $('#container');

		$container.append(Handlebars.partials['header']());
        $container.append(Handlebars.partials['user-select-landing']());
        $container.append(Handlebars.partials['account-landing']());
        $container.append(Handlebars.partials['nurse-signup'](nurseDropdowns));

    }

    var initMap = function() {
        var marker1 = {lat: 39.965514, lng: -82.989893};
        //var marker2 = {lat: 39.967, lng: -82.99};
        //var marker3 = {lat: 39.977, lng: -82.80};
        //var marker4 = {lat: 40.965514, lng: -83.989893};
        //var marker5 = {lat: 38.965514, lng: -81.989893};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: marker1,
            styles: [
                {elementType: 'geometry', stylers: [{color: '#303160'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{color: '#263c3f'}]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#6b9a76'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{color: '#38414e'}]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#212a37'}]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#9ca5b3'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{color: '#746855'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{color: '#1f2835'}]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#f3d19c'}]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{color: '#2f3948'}]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#d59563'}]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{color: '#17263c'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{color: '#515c6d'}]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{color: '#17263c'}]
                }
            ]
        });

        var locations = [
            ['test', 39.965514, -82.989893, 4],
            ['test 2', 39.967, -82.99, 5],
            ['test 3', 39.977, -82.80, 3],
            ['test 4', 40.965514, -83.989893, 2],
            ['test 5', 38.965514, -81.989893, 1]
        ];

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
        }

    }

    $(document).ready(function(){
        Nurses.init();

    });

    var bindings = function() {
        $(document).on('click', '#cta-learn-more', function() {
            $('#bottom-section').scrollView();
        });

        $(document).on('click', '.panel-selector', function() {
            var $self = $(this);
            var $activePanel = $('.slideable-panel.active');
            var panelId = $self.attr('data-panel-id');

            var $selectedPanel = $('#' + panelId);
            var panelSequence = $selectedPanel.attr('data-slide-sequence');
            var activeSequence = $activePanel.attr('data-slide-sequence');

            if (activeSequence < panelSequence) {
                $activePanel.css('left', '-100%');
            } else {
                $activePanel.css('left', '100%');
            }

            $activePanel.removeClass('active');
            $selectedPanel.addClass('active');

            if (panelSequence == 1) {
                $('#bottom-section').removeClass('display-none');
            } else {
                $('#bottom-section').addClass('display-none');
            }

            $selectedPanel.css('left', '0');
        });

        $(document).on('click', '#login', function() {
            $('.header').addClass('logged-in');
            $('#container').attr('data-view-type', "logged-in");
            $('#container').find('#account-container .container-overlay').addClass('active');

        });

        $(document).on('click', '.service-type', function() {
            var $self = $(this);
            $self.addClass('selected');
            $('.nurse-map-view').addClass('active');
            initMap();
        });
    }

    bindings();

    return {
        init: init,
        initMap : initMap,
        dataConstants : dataConstants
    }

})();

// Handlebars examples

/*Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>";
});


Handlebars.partials['container']({id : "id"});*/

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE51cnNlcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZGF0YUNvbnN0YW50cyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBVU0VSX0lEIDogMCxcbiAgICAgICAgRElTUExBWV9OQU1FIDogMSxcbiAgICAgICAgTE9DQVRJT04gOiAyLFxuICAgICAgICBDRVJUSUZJQ0FUSU9OX05VTUJFUiA6IDMsXG4gICAgICAgIFlFQVJTX0VYUCA6IDQsXG4gICAgICAgIFNQRUNJQUxUWSA6IDUsXG4gICAgICAgIEJJTyA6IDYsXG4gICAgICAgIFJFU1VNRSA6IDcsXG4gICAgICAgIElNQUdFIDogOCxcbiAgICAgICAgUEhPTkVfTlVNIDogOSxcbiAgICAgICAgRU1BSUwgOiAxMCxcbiAgICAgICAgUkFUSU5HIDogMTEsXG4gICAgICAgIFJBVEUgOiAxMixcbiAgICAgICAgQVZBSUxBQklMSVRZIDogMTMsXG4gICAgICAgIFRBR0xJTkUgOiAxNFxuICAgIH0pO1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciAoI25zLWNvbnRhaW5lcilcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWydjb250YWluZXInXSgpKTtcblxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJyNjb250YWluZXInKTtcblxuXHRcdCRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2hlYWRlciddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWyd1c2VyLXNlbGVjdC1sYW5kaW5nJ10oKSk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2FjY291bnQtbGFuZGluZyddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWydudXJzZS1zaWdudXAnXShudXJzZURyb3Bkb3ducykpO1xuXG4gICAgfVxuXG4gICAgdmFyIGluaXRNYXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1hcmtlcjEgPSB7bGF0OiAzOS45NjU1MTQsIGxuZzogLTgyLjk4OTg5M307XG4gICAgICAgIC8vdmFyIG1hcmtlcjIgPSB7bGF0OiAzOS45NjcsIGxuZzogLTgyLjk5fTtcbiAgICAgICAgLy92YXIgbWFya2VyMyA9IHtsYXQ6IDM5Ljk3NywgbG5nOiAtODIuODB9O1xuICAgICAgICAvL3ZhciBtYXJrZXI0ID0ge2xhdDogNDAuOTY1NTE0LCBsbmc6IC04My45ODk4OTN9O1xuICAgICAgICAvL3ZhciBtYXJrZXI1ID0ge2xhdDogMzguOTY1NTE0LCBsbmc6IC04MS45ODk4OTN9O1xuXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICAgICAgem9vbTogMTUsXG4gICAgICAgICAgICBjZW50ZXI6IG1hcmtlcjEsXG4gICAgICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjMzAzMTYwJ31dfSxcbiAgICAgICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzI0MmYzZSd9XX0sXG4gICAgICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Q1OTU2Myd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMyNjNjM2YnfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNmI5YTc2J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzM4NDE0ZSd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjEyYTM3J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWNhNWIzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzFmMjgzNSd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjNkMTljJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzJmMzk0OCd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMxNzI2M2MnfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNTE1YzZkJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMTcyNjNjJ31dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbG9jYXRpb25zID0gW1xuICAgICAgICAgICAgWyd0ZXN0JywgMzkuOTY1NTE0LCAtODIuOTg5ODkzLCA0XSxcbiAgICAgICAgICAgIFsndGVzdCAyJywgMzkuOTY3LCAtODIuOTksIDVdLFxuICAgICAgICAgICAgWyd0ZXN0IDMnLCAzOS45NzcsIC04Mi44MCwgM10sXG4gICAgICAgICAgICBbJ3Rlc3QgNCcsIDQwLjk2NTUxNCwgLTgzLjk4OTg5MywgMl0sXG4gICAgICAgICAgICBbJ3Rlc3QgNScsIDM4Ljk2NTUxNCwgLTgxLjk4OTg5MywgMV1cbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgbWFya2VyLCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxvY2F0aW9uc1tpXVsxXSwgbG9jYXRpb25zW2ldWzJdKSxcbiAgICAgICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgIE51cnNlcy5pbml0KCk7XG5cbiAgICB9KTtcblxuICAgIHZhciBiaW5kaW5ncyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2N0YS1sZWFybi1tb3JlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjYm90dG9tLXNlY3Rpb24nKS5zY3JvbGxWaWV3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucGFuZWwtc2VsZWN0b3InLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkc2VsZiA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgJGFjdGl2ZVBhbmVsID0gJCgnLnNsaWRlYWJsZS1wYW5lbC5hY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBwYW5lbElkID0gJHNlbGYuYXR0cignZGF0YS1wYW5lbC1pZCcpO1xuXG4gICAgICAgICAgICB2YXIgJHNlbGVjdGVkUGFuZWwgPSAkKCcjJyArIHBhbmVsSWQpO1xuICAgICAgICAgICAgdmFyIHBhbmVsU2VxdWVuY2UgPSAkc2VsZWN0ZWRQYW5lbC5hdHRyKCdkYXRhLXNsaWRlLXNlcXVlbmNlJyk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2UgPSAkYWN0aXZlUGFuZWwuYXR0cignZGF0YS1zbGlkZS1zZXF1ZW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2VxdWVuY2UgPCBwYW5lbFNlcXVlbmNlKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVBhbmVsLmNzcygnbGVmdCcsICctMTAwJScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlUGFuZWwuY3NzKCdsZWZ0JywgJzEwMCUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGFjdGl2ZVBhbmVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRzZWxlY3RlZFBhbmVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKHBhbmVsU2VxdWVuY2UgPT0gMSkge1xuICAgICAgICAgICAgICAgICQoJyNib3R0b20tc2VjdGlvbicpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2JvdHRvbS1zZWN0aW9uJykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VsZWN0ZWRQYW5lbC5jc3MoJ2xlZnQnLCAnMCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvZ2luJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuYWRkQ2xhc3MoJ2xvZ2dlZC1pbicpO1xuICAgICAgICAgICAgJCgnI2NvbnRhaW5lcicpLmF0dHIoJ2RhdGEtdmlldy10eXBlJywgXCJsb2dnZWQtaW5cIik7XG4gICAgICAgICAgICAkKCcjY29udGFpbmVyJykuZmluZCgnI2FjY291bnQtY29udGFpbmVyIC5jb250YWluZXItb3ZlcmxheScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlcnZpY2UtdHlwZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRzZWxmLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgJCgnLm51cnNlLW1hcC12aWV3JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kaW5ncygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdCxcbiAgICAgICAgaW5pdE1hcCA6IGluaXRNYXAsXG4gICAgICAgIGRhdGFDb25zdGFudHMgOiBkYXRhQ29uc3RhbnRzXG4gICAgfVxuXG59KSgpO1xuXG4vLyBIYW5kbGViYXJzIGV4YW1wbGVzXG5cbi8qSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignbGlzdCcsIGZ1bmN0aW9uKGl0ZW1zLCBvcHRpb25zKSB7XG4gICAgdmFyIG91dCA9IFwiPHVsPlwiO1xuXG4gICAgZm9yKHZhciBpPTAsIGw9aXRlbXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICBvdXQgPSBvdXQgKyBcIjxsaT5cIiArIG9wdGlvbnMuZm4oaXRlbXNbaV0pICsgXCI8L2xpPlwiO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQgKyBcIjwvdWw+XCI7XG59KTtcblxuXG5IYW5kbGViYXJzLnBhcnRpYWxzWydjb250YWluZXInXSh7aWQgOiBcImlkXCJ9KTsqL1xuIl0sImZpbGUiOiJzY3JpcHQuanMifQ==
