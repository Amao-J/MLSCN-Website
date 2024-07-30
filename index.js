$(document).ready(function() {
    function resetDropdowns() {
        $('.dropdown-menu.show').removeClass('show activate');
        $('.dropdown-toggle.active').removeClass('active');
    }

    $('.dropdown-toggle').on('click', function(e) {
        e.stopImmediatePropagation();
        var $this = $(this);

        if (!$this.next().hasClass('show')) {
            resetDropdowns();
        }

        var $subMenu = $this.next('.dropdown-menu');
        $subMenu.toggleClass('show activate');
        $this.toggleClass('active');

        $subMenu.on('animationend', function() {
            if (!$this.closest('.nav-item').is(':nth-last-child(-n+4)')) {
                $this.closest('.nav-item').addClass('height-changed');
            }
        });

        $this.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function() {
            $subMenu.removeClass('show activate');
            $this.removeClass('active');
            $this.closest('.nav-item').removeClass('height-changed');
        });

        return false;
    });

    $('.nav-item').on('click', function() {
        $(this).find('.dropdown-menu').addClass('activate');
    });

    $(document).on('click', function() {
        resetDropdowns();
    });

    $('.navbar-toggler').on('click', function() {
        $('#navbarNav').toggleClass('show');
    });

    $(".nest > .dropdown-item").on("click", function(e) {
        e.stopImmediatePropagation();
        var $this = $(this);
        var $subMenu = $this.next('.dropdown-menu');

        if ($subMenu.length) {
            $subMenu.toggleClass('show');
        }
    });

    $('#close-btn').on('click', function() {
        $('#navbarNav').removeClass('show');
    });

    const showTable = () => {
        const tables = document.querySelectorAll('.hospital-table');
        tables.forEach(table => table.style.display = 'none');

        const selectedCategory = document.getElementById('hospital-category').value;
        document.getElementById(selectedCategory).style.display = 'table';
    }

    $('#hospital-category').on('change', function() {
        showTable();
    });

    showTable();
});
