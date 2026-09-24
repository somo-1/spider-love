```javascript
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    document.body.classList.add("page-exit");

    setTimeout(function () {
        window.location.href = "story.html";
    }, 800);

});
```
