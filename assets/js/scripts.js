/*!
* Adminara v1.0.0 (http://darana.id/templates/adminara)
* Copyright 2021 DaranaSV
*/
$(function () {
    $('#sidebarNav').metisMenu();

    let header = $('.ara-header');
    let sidebar = $('.ara-sidebar');
    let mainWrapper = $('.ara-main');
    $('#sidebarToggle').on('click', function() {
        header.toggleClass('collapsed');
        sidebar.toggleClass('collapsed');
        mainWrapper.toggleClass('collapsed');
    })
});
