// retrieve the name of the content and send it.
$(function() {

    let title = ''
    $('#__player__').off().on('DOMSubtreeModified', function() {
        title = $(this).find('div.metadata-area__second-line').text();
        if (title != '') {
            // replace with send title
            console.log(title);

            // track timestamp
            // TODO: timestamp actually disappears when the user isn't actively hovering
            // probably a react component only updating UI when necessary
            // project on hold until I can figure that out
            let timestamp = '';
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    let update = mutation.addedNodes[0];
                    if (update != timestamp) {
                        console.log(update);
                        timestamp = update;
                    }
                }
            });    
            // Node, config
            observer.observe($('span.controls__time-elapsed')[0], { childList: true });
            // turn off handler
            $(this).off();
        }
    });
});
