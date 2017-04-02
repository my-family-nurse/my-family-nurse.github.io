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
        $container.find('#landing-container .container-overlay').append(Handlebars.partials['nurse-signup'](nurseDropdowns));

    }

    var initMap = function() {
        var marker1 = {lat: 39.965514, lng: -82.989893};

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
            ['test 3', 39.964, -82.992, 3],
            ['test 4', 39.969, -82.988893, 2],
            ['test 5', 39.966514, -82.9897793, 1]
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIE51cnNlcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgZGF0YUNvbnN0YW50cyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBVU0VSX0lEIDogMCxcbiAgICAgICAgRElTUExBWV9OQU1FIDogMSxcbiAgICAgICAgTE9DQVRJT04gOiAyLFxuICAgICAgICBDRVJUSUZJQ0FUSU9OX05VTUJFUiA6IDMsXG4gICAgICAgIFlFQVJTX0VYUCA6IDQsXG4gICAgICAgIFNQRUNJQUxUWSA6IDUsXG4gICAgICAgIEJJTyA6IDYsXG4gICAgICAgIFJFU1VNRSA6IDcsXG4gICAgICAgIElNQUdFIDogOCxcbiAgICAgICAgUEhPTkVfTlVNIDogOSxcbiAgICAgICAgRU1BSUwgOiAxMCxcbiAgICAgICAgUkFUSU5HIDogMTEsXG4gICAgICAgIFJBVEUgOiAxMixcbiAgICAgICAgQVZBSUxBQklMSVRZIDogMTMsXG4gICAgICAgIFRBR0xJTkUgOiAxNFxuICAgIH0pO1xuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBtYWluIGNvbnRhaW5lciAoI25zLWNvbnRhaW5lcilcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWydjb250YWluZXInXSgpKTtcblxuICAgICAgICB2YXIgJGNvbnRhaW5lciA9ICQoJyNjb250YWluZXInKTtcblxuXHRcdCRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2hlYWRlciddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChIYW5kbGViYXJzLnBhcnRpYWxzWyd1c2VyLXNlbGVjdC1sYW5kaW5nJ10oKSk7XG4gICAgICAgICRjb250YWluZXIuYXBwZW5kKEhhbmRsZWJhcnMucGFydGlhbHNbJ2FjY291bnQtbGFuZGluZyddKCkpO1xuICAgICAgICAkY29udGFpbmVyLmZpbmQoJyNsYW5kaW5nLWNvbnRhaW5lciAuY29udGFpbmVyLW92ZXJsYXknKS5hcHBlbmQoSGFuZGxlYmFycy5wYXJ0aWFsc1snbnVyc2Utc2lnbnVwJ10obnVyc2VEcm9wZG93bnMpKTtcblxuICAgIH1cblxuICAgIHZhciBpbml0TWFwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtYXJrZXIxID0ge2xhdDogMzkuOTY1NTE0LCBsbmc6IC04Mi45ODk4OTN9O1xuXG4gICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICAgICAgem9vbTogMTUsXG4gICAgICAgICAgICBjZW50ZXI6IG1hcmtlcjEsXG4gICAgICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7Y29sb3I6ICcjMzAzMTYwJ31dfSxcbiAgICAgICAgICAgICAgICB7ZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbe2NvbG9yOiAnIzI0MmYzZSd9XX0sXG4gICAgICAgICAgICAgICAge2VsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnYWRtaW5pc3RyYXRpdmUubG9jYWxpdHknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnI2Q1OTU2Myd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMyNjNjM2YnfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2kucGFyaycsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNmI5YTc2J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzM4NDE0ZSd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMjEyYTM3J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjOWNhNWIzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNzQ2ODU1J31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncm9hZC5oaWdod2F5JyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzFmMjgzNSd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZjNkMTljJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAndHJhbnNpdCcsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXJzOiBbe2NvbG9yOiAnIzJmMzk0OCd9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQuc3RhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjZDU5NTYzJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVyczogW3tjb2xvcjogJyMxNzI2M2MnfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd3YXRlcicsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjNTE1YzZkJ31dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7Y29sb3I6ICcjMTcyNjNjJ31dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbG9jYXRpb25zID0gW1xuICAgICAgICAgICAgWyd0ZXN0JywgMzkuOTY1NTE0LCAtODIuOTg5ODkzLCA0XSxcbiAgICAgICAgICAgIFsndGVzdCAyJywgMzkuOTY3LCAtODIuOTksIDVdLFxuICAgICAgICAgICAgWyd0ZXN0IDMnLCAzOS45NjQsIC04Mi45OTIsIDNdLFxuICAgICAgICAgICAgWyd0ZXN0IDQnLCAzOS45NjksIC04Mi45ODg4OTMsIDJdLFxuICAgICAgICAgICAgWyd0ZXN0IDUnLCAzOS45NjY1MTQsIC04Mi45ODk3NzkzLCAxXVxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBtYXJrZXIsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobG9jYXRpb25zW2ldWzFdLCBsb2NhdGlvbnNbaV1bMl0pLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgTnVyc2VzLmluaXQoKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIGJpbmRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY3RhLWxlYXJuLW1vcmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNib3R0b20tc2VjdGlvbicpLnNjcm9sbFZpZXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wYW5lbC1zZWxlY3RvcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRzZWxmID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciAkYWN0aXZlUGFuZWwgPSAkKCcuc2xpZGVhYmxlLXBhbmVsLmFjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIHBhbmVsSWQgPSAkc2VsZi5hdHRyKCdkYXRhLXBhbmVsLWlkJyk7XG5cbiAgICAgICAgICAgIHZhciAkc2VsZWN0ZWRQYW5lbCA9ICQoJyMnICsgcGFuZWxJZCk7XG4gICAgICAgICAgICB2YXIgcGFuZWxTZXF1ZW5jZSA9ICRzZWxlY3RlZFBhbmVsLmF0dHIoJ2RhdGEtc2xpZGUtc2VxdWVuY2UnKTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVTZXF1ZW5jZSA9ICRhY3RpdmVQYW5lbC5hdHRyKCdkYXRhLXNsaWRlLXNlcXVlbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVTZXF1ZW5jZSA8IHBhbmVsU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlUGFuZWwuY3NzKCdsZWZ0JywgJy0xMDAlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRhY3RpdmVQYW5lbC5jc3MoJ2xlZnQnLCAnMTAwJScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkYWN0aXZlUGFuZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHNlbGVjdGVkUGFuZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAocGFuZWxTZXF1ZW5jZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgJCgnI2JvdHRvbS1zZWN0aW9uJykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjYm90dG9tLXNlY3Rpb24nKS5hZGRDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWxlY3RlZFBhbmVsLmNzcygnbGVmdCcsICcwJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9naW4nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5hZGRDbGFzcygnbG9nZ2VkLWluJyk7XG4gICAgICAgICAgICAkKCcjY29udGFpbmVyJykuYXR0cignZGF0YS12aWV3LXR5cGUnLCBcImxvZ2dlZC1pblwiKTtcbiAgICAgICAgICAgICQoJyNjb250YWluZXInKS5maW5kKCcjYWNjb3VudC1jb250YWluZXIgLmNvbnRhaW5lci1vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VydmljZS10eXBlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHNlbGYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJHNlbGYuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAkKCcubnVyc2UtbWFwLXZpZXcnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRpbmdzKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0LFxuICAgICAgICBpbml0TWFwIDogaW5pdE1hcCxcbiAgICAgICAgZGF0YUNvbnN0YW50cyA6IGRhdGFDb25zdGFudHNcbiAgICB9XG5cbn0pKCk7XG5cbi8vIEhhbmRsZWJhcnMgZXhhbXBsZXNcblxuLypIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdsaXN0JywgZnVuY3Rpb24oaXRlbXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3V0ID0gXCI8dWw+XCI7XG5cbiAgICBmb3IodmFyIGk9MCwgbD1pdGVtcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIG91dCA9IG91dCArIFwiPGxpPlwiICsgb3B0aW9ucy5mbihpdGVtc1tpXSkgKyBcIjwvbGk+XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dCArIFwiPC91bD5cIjtcbn0pO1xuXG5cbkhhbmRsZWJhcnMucGFydGlhbHNbJ2NvbnRhaW5lciddKHtpZCA6IFwiaWRcIn0pOyovXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
