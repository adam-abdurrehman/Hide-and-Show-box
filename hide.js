document.getElementById("btn-show").hidden = true;
document.getElementById("btn-hide").addEventListener(
    "click",
    () => {
        document.getElementById("div").hidden = true;
        document.getElementById("btn-hide").hidden = true;
        document.getElementById("btn-show").hidden = false;
    }
)
document.getElementById("btn-show").addEventListener(
    "click",
    () => {
        document.getElementById("div").hidden = false;
        document.getElementById("btn-hide").hidden = false;
        document.getElementById("btn-show").hidden = true;
    }
)