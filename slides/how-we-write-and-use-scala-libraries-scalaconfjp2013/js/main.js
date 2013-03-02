$(document).ready(function () {

    var showOnly = function (id, dir) {

        $('section')
            .filter(function(index) { return $(this).attr('id') != id; })
            .hide();

        $('section')
            .filter(function(index) { return $(this).attr('id') == id; })
            .show();

        if (dir == -1) {
            $('.incr').show();
        }

        if (dir == 1) {
            $('.incr').hide();
        }

    };

    var getPageIndex = function () {
        if (location.hash == '') {
            return 1;
        }
        return location.hash.substring(1);
    };

    var getItemsInvisible = function () {
        return $('section' + '#' + getPageIndex() + ' .incr').filter(function (index) {
            return $(this).css('display') == 'none';
        });
    };

    var displayOneMoreItem = function () {
        var itemsInvisible = getItemsInvisible();

        if (itemsInvisible.size() > 0) {
            var itemToShow = itemsInvisible[0];
            var tagName = itemToShow.tagName;
            if (tagName == 'LI') {
                $(itemToShow).css({'display': 'list-item'});
            } else if (tagName == 'SPAN'){
                $(itemToShow).css({'display': 'inline'});
            } else if (tagName == 'TR'){
                $(itemToShow).css({'display': 'table-row'});
            } else {
                $(itemToShow).css({'display': 'block'});
            }

            return true;
        }
        return false;
    };

    var hideOneMoreItem = function () {
        var itemsVisible = $('section' + '#' + getPageIndex() + ' .incr').filter(function (index) {
            return $(this).css('display') != 'none';
        });

        if (itemsVisible.size() > 0) {
            var lastIndex = itemsVisible.size() - 1;
            var itemToShow = itemsVisible[lastIndex];
            var tagName = itemToShow.tagName;
            $(itemToShow).css({'display': 'none'});
            return true;
        }
        return false;
    };

    var showNewPage = function (dir) {
        var newPageIndex = parseInt(getPageIndex()) + dir;

        if (newPageIndex < 1 || newPageIndex > maxPageIndex) {
            return;
        }

        showOnly(newPageIndex, dir);

        location.hash = '#' + newPageIndex;
    };

    var move = function(e) {

        var DIRECTIONS = {
            37: -1,     // >
            38: -1,     // up
            39: 1,      // <
            40: 1,      // down
            32: 1,      // _
            13: 1,      // return
            27: 'home', // esc
            left: -1,
            right: 1
        };

        var dir = DIRECTIONS[e.which || e];

        if (dir) {

            if (dir == 'home') {
                e.preventDefault();
                e.stopPropagation();
                location.href = './';
            } else {

                if (dir == 1) {
                    if (displayOneMoreItem()) {
                        return;
                    }
                }

                if (dir == -1) {
                    if (hideOneMoreItem()) {
                        return;
                    }
                }

                showNewPage(dir);
            }
        }

    };

    $('section').each(function (index) {
        $(this).attr('id', index + 1);
    });

    $('.incr').each(function (index) {
        $(this).css('display', 'none');
    });

    var maxPageIndex = function () {
        var max = 0;
        $('section').each(function () {
            if (parseInt($(this).attr('id')) > max) {
                max = $(this).attr('id');
            }
        });
        return max;
    }();

    $(document).bind('keydown', move);

    var storedPageIndex = -1;

    window.setInterval(function () {

        if (getPageIndex() != storedPageIndex) {
            storedPageIndex = getPageIndex();
            showOnly(storedPageIndex);
        }

    }, 100);


});

