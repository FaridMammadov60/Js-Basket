let table = document.getElementById("table");
let totalPrice = document.getElementById("totalPrice");
let sumTotalPrice = 0;

if (localStorage.getItem("basket") != null) {
    let arr = JSON.parse(localStorage.getItem("basket"));
    arr.forEach(product => {
        let tr = document.createElement("tr");
        let tdimage = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src", product.imageUrl);
        image.style.width = "200px";
        image.style.height = "150px";

        tdimage.append(image);

        let tdname = document.createElement("td");
        tdname.innerText = product.name;

        let tdprice = document.createElement("td");
        tdprice.innerText = product.price;

        let tdcount = document.createElement("td");
        tdcount.innerText = product.count;
        let btnminus = document.createElement("button");
        btnminus.innerText = "-";
        let btnplyus = document.createElement("button");
        btnplyus.innerText = "+";
        tdcount.append(btnplyus);
        tdcount.prepend(btnminus);

        let tdsubtotal = document.createElement("td");
        tdsubtotal.innerText = product.count * product.price;

        let remove = document.createElement("td");
        let btnremove = document.createElement("button");
        btnremove.innerText = "X";
        remove.append(btnremove);

        tr.append(tdimage, tdname, tdprice, tdcount, tdsubtotal, remove);

        btnremove.onclick = function () {            
            Remove();
        }

        table.lastElementChild.append(tr);

        sumTotalPrice += product.count * product.price;
        totalPrice.innerText = sumTotalPrice;

    });
}
function Remove() {
    arr.map(product => {
        let findArr = arr.find(p => p.id != product.id);
        arr=findArr
    })
    return arr;

}
