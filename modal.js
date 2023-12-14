$(document).ready(function(){
    $(".openModal").click(function(){
        var modalId = $(this).data("modal-id");
        generateModal(modalId);
    });
});

function generateModal(modalId) {
    // Define the modal structure
    var modalHTML = `
        <div class="modal" id="modal${modalId}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modal Title ${modalId}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        Content for modal ${modalId}...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;

    // Append the modal to the placeholder and show it
    $('#modalPlaceholder').html(modalHTML);
    $(`#modal${modalId}`).modal('show');
}