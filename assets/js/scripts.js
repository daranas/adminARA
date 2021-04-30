/*!
* Adminara v1.0.0 (http://darana.id/templates/adminara)
* Copyright 2021 DaranaSV
*/
(function($) {
    "use strict";

    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("is-toggled");
    });
})(jQuery);
