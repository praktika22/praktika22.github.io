document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalGeo = document.getElementById("modal-geo");
    var modalCulture = document.getElementById("modal-culture");
    var btn = document.getElementById("open-modal");
    var btnGeo = document.getElementById("open-modal-geo");
    var btnCulture = document.getElementById("open-modal-culture");
    var span = document.getElementsByClassName("close");

    btn.onclick = function() {
        var content = document.querySelector(".content-zag");
        modal.style.display = "block";
        content.style.display = "block";
    }

    btnGeo.onclick = function() {
        var contentGeo = document.querySelector(".content-geo");
        modalGeo.style.display = "block";
        contentGeo.style.display = "block";
    }

    btnCulture.onclick = function() {
        var contentCulture = document.querySelector(".content-culture");
        modalCulture.style.display = "block";
        contentCulture.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        modalGeo.style.display = "none";
        modalCulture.style.display = "none";

        document.querySelector(".content-zag").style.display = "none";
        document.querySelector(".content-geo").style.display = "none";
        document.querySelector(".content-culture").style.display = "none";
    }

    for (var i = 0; i < span.length; i++) {
        span[i].onclick = closeModal;
    }

    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            closeModal();
        }
    }
});
