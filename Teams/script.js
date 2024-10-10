// function toggleInfo(member) {
//     const info = member.querySelector('.info');
//     const img = member.querySelector('img');

//     if (info.style.transform === "rotateY(0deg)") {
//         info.style.transform = "rotateY(180deg)";
//         img.style.transform = "rotateY(0deg)";
//     } else {
//         info.style.transform = "rotateY(0deg)";
//         img.style.transform = "rotateY(180deg)";
//     }
// }

function showDetails(memberId) {
    const details = document.getElementById(memberId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Hide details by default
document.querySelectorAll('.details').forEach(detail => {
    detail.style.display = "none";
});

