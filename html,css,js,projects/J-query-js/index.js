$(function() {
    // Make boxes draggable
    $(".box").draggable({
        revert: "invalid", // agar drop nahi hua to wapas apni jagah
        containment: "body",
        scroll: false
    });

    // Make columns droppable
    $(".column").droppable({
        accept: ".box",
        drop: function(event, ui) {
            // Drop hone par box ko column ke andar move karo
            $(this).append(ui.draggable);
            
            // box ka position reset kar do relative to column
            ui.draggable.css({
                top: '0px',
                left: '0px'
            });
        }
    });
});
