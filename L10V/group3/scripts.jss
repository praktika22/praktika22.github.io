document.addEventListener("DOMContentLoaded", function() {
    var modals = {
        "open-modal": {
            modalId: "modal",
            contentClass: "content-zag",
            backgroundColor: "#DCDCDC"
        },
        "open-modal-geo": {
            modalId: "modal-geo",
            contentClass: "content-geo",
            backgroundColor: "#FDF5E6"
        },
        "open-modal-culture": {
            modalId: "modal-culture",
            contentClass: "content-culture",
            backgroundColor: "#E6E6FA"
        }
    };

    for (var key in modals) {
        if (modals.hasOwnProperty(key)) {
            document.getElementById(key).onclick = (function(modalSettings) {
                return function() {
                    var modal = document.getElementById(modalSettings.modalId);
                    var content = document.querySelector("." + modalSettings.contentClass);
                    content.style.backgroundColor = modalSettings.backgroundColor;
                    modal.classList.add("visible");
                    content.classList.add("visible");
                };
            })(modals[key]);
        }
    }

    var closeButtons = document.querySelectorAll(".close");

    function closeModal() {
        document.querySelectorAll(".modal").forEach(function(modal) {
            modal.classList.remove("visible");
        });
        document.querySelectorAll(".content-zag, .content-geo, .content-culture").forEach(function(content) {
            content.classList.remove("visible");
        });
    }

    closeButtons.forEach(function(button) {
        button.onclick = closeModal;
    });

    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            closeModal();
        }
    };
});
