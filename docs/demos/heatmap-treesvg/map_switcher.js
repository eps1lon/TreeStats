$(document).ready(function() {
    $('#heatmaps').change(function() {
        $('#heatmap').attr('src', $(this).val());
    });

    // display default option immediately
    $('#heatmaps').trigger('change');
});
