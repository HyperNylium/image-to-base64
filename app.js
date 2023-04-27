
const searchbutton = document.getElementById("searchbutton");
const fileInput = document.getElementById('fileInput');

searchbutton.addEventListener("click", () => {
    fileInput.click();
    fileInput.addEventListener("change", () => {
        let file = fileInput.files[0];
        let reader = new FileReader();

        reader.onloadend = function () {
            let base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
            document.getElementById('result').innerHTML = "<p>Base64 Image:</p><img src='" + reader.result + "'><br><br><p>Base64 String:</p><textarea rows='4' cols='50'>" + base64String + "</textarea>";
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
});