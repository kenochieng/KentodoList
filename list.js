const BtnAdd = document.querySelector(".addcircle");
BtnAdd.addEventListener("click",AddNew);

function AddNew(){
    const itmDiv = document.createElement("div");
    document.body.appendChild(itmDiv);
    itmDiv.classList.add('itmdiv');

    const itmName = document.getElementById('item');
    const time = document.getElementById('time');

    itmDiv.innerHTML = itmName.value +""+ time.value;

}