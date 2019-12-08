$(function() {
    // $('.table__edit').tooltip();


    // Pagination List
    $('#pagList').on('click', function() {
        $('#pgListValue').toggleClass('active');
    })

    $('.xdsoft_today_button').css('display', 'none');

    // Table line Show && Hide

    // FirstItem
    $('#tableFirstItemShow').on('click', function() {
        $('.table__line--firstItem').show(300);
        $('#tableFirstItemShow').hide();
        $('#tableFirstItemHide').show();

        
    })

    $('#tableFirstItemHide').on('click', function() {
        $('.table__line--firstItem').hide(300);
        $('#tableFirstItemShow').show();
        $('#tableFirstItemHide').hide();

    })

    // SecondItem
    $('#tableSecondItemShow').on('click', function() {
        $('.table__line--secondItem').show(300);
        $('#tableSecondItemShow').hide();
        $('#tableSecondItemHide').show();

        
    })

    $('#tableSecondItemHide').on('click', function() {
        $('.table__line--secondItem').hide(300);
        $('#tableSecondItemShow').show();
        $('#tableSecondItemHide').hide();

    })

    // ThirdItem
    $('#tableThirdItemShow').on('click', function() {
        $('.table__line--thirdItem').show(300);
        $('#tableThirdItemShow').hide();
        $('#tableThirdItemHide').show();

        
    })

    $('#tableThirdItemHide').on('click', function() {
        $('.table__line--thirdItem').hide(300);
        $('#tableThirdItemShow').show();
        $('#tableThirdItemHide').hide();

    })

    // FourthItem
    $('#tableFourthItemShow').on('click', function() {
        $('.table__line--fourthItem').show(300);
        $('#tableFourthItemShow').hide();
        $('#tableFourthItemHide').show();

        
    })

    $('#tableFourthItemHide').on('click', function() {
        $('.table__line--fourthItem').hide(300);
        $('#tableFourthItemShow').show();
        $('#tableFourthItemHide').hide();

    })





});