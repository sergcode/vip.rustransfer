window.viewData = {};

$(function() {

    // Update the viewData object with the current field keys and values.
    function updateViewData(key, value) {
        let strKey = '';

        if(isObject(key))
            strKey = key[0].dataset.bind;
        else
            strKey = key.toString();

        let currentData = viewData;
        let keys = strKey.split('.');

        keys.map(function(item, i, arr){
           if(i === arr.length - 1)
               currentData[item] = value;
           else
           {
               if(!currentData[item])
                   currentData[item] = {};
               currentData = currentData[item];
           }
        });
    }

    function isObject (value) {
        return value && typeof value === 'object';
    }

    // Register all bindable elements
    function detectBindableElements() {
        var bindableEls;

        bindableEls = $('[data-bind]');

        // Add event handlers to update viewData and trigger callback event.
        bindableEls.on('change', function() {
            var $this;

            $this = $(this);

            updateViewData($this.data('bind'), $this.val());

            $(document).trigger('updateDisplay');
        });

        // Add a reference to each bindable element in viewData.
        bindableEls.each(function() {
            updateViewData($(this));
        });
    }

    // Trigger this event to manually update the list of bindable elements, useful when dynamically loading form fields.
    $(document).on('updateBindableElements', detectBindableElements);

    detectBindableElements();
});

$(function() {
    // An example of how the viewData can be used by other functions.
    function updateDisplay() {
        var updateEls;

        updateEls = $('[data-update]');

        updateEls.each(function() {
            $(this).html(viewData[$(this).data('update')]);
        });
    }

    // Run updateDisplay on the callback.
    $(document).on('updateDisplay', updateDisplay);
});