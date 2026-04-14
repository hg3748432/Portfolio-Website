var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var content3=document.getElementById("content3");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
function openskills(){
    content1.style.transform="translateX(0)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(100%)";
    btn2.style.color="aliceblue";
    btn3.style.color="aliceblue";
}
function openeducation(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0)";
    content3.style.transform="translateX(100%)";
    btn2.style.color="rgb(206, 169, 241)";
    btn1.style.color="aliceblue";
    btn3.style.color="aliceblue";
}
function openexperience(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(0)";
    btn3.style.color="rgb(206, 169, 241)";
    btn2.style.color="aliceblue";
    btn1.style.color="aliceblue";
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    })
        .then(res => res.json())
        .then(data => alert("Submitted 🚀"))
        .catch(err => console.error(err));
});

document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const file = document.getElementById("fileInput").files[0];
    const status = document.getElementById("uploadStatus");

    if (!file) {
        status.innerText = "Please choose a file";
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    status.innerText = "Uploading...";

    fetch("/api/upload", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            status.innerHTML = `Uploaded ✅ <a href="${data.url}" target="_blank">View File</a>`;
        })
        .catch(err => {
            console.error(err);
            status.innerText = "Upload failed";
        });
});