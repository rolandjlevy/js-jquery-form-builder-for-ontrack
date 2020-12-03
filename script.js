  $(function() {

    // Select menus

    $("select").selectmenu({
      width: 150,
      change: function(e, data) {
        var result = data.item.value || e.target.value;
        console.log('Selected: ', result);
      }
    });

    $("#questions-a").selectmenu();
    $("#answers-a").selectmenu();
    $("#questions-b").selectmenu();
    $("#answers-b").selectmenu();
    $("#operator").selectmenu({
      width: 100
    });

    var operatorWidth = $("select#operator").attr('data-width');
    console.log(operatorWidth);


    // $.widget("custom.menu", {
    //   _create: function() {
    //     console.log(this);
    //   },
    //   _renderMenu: function( ul, items ) {
    //     var that = this;
    //     $.each( items, function( index, item ) {
    //       that._renderItemData( ul, item );
    //     });
    //     $( ul ).find( "li:odd" ).addClass( "odd" );
    //   }
    // });
    
    // $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

    // Checkbox
    $("input[type='checkbox']").checkboxradio({
      create: function(event, ui) {}
    });
    $("input[type='checkbox']").on("click", function(event, ui) {
      var checked = $(this).context.checked;
      console.log('Checked: ', checked);
    });

    // Radio
    $("input[type='radio']").checkboxradio({
      create: function(event, ui) {}
    });
    $("input[type='radio']").on("click", function(event, ui) {
      var checked = $(this).context.checked;
      console.log('Checked: ', checked);
    });
  
    // Buttons
    $("button, a").click(function(e) {
      var href = $(this).attr('value');
      console.log('Value: ', href || e.target.value);
      e.preventDefault();
    });

    // Submit button
    $("form").submit(function(e) {
      var location = $("input[name='radio-1']:checked").val();
      var ratings1Star = $("input[name='checkbox-1']:checked").val();
      var bed = $("input[name='checkbox-nested-1']:checked").val();
      console.log({location, ratings1Star, bed});
      e.preventDefault();
    });

    // Draggable
    $("#draggable-buttons .ui-button").draggable({ 
      cancel: false,
      helper: "clone",
      revert: "invalid"
    });

    $(".draggable > *").draggable({
      helper: "clone",
      revert: "invalid"
    });

  });