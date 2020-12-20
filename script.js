var list_arr = [
    "Go to the gym", "Make dinner", "Play video games"
];

function initialize(){
    document.getElementById("listalerts").innerHTML = "Input new list additions";
    updateList();
}

function updateList(){
    var result = "";
    document.getElementById("listdiv").innerHTML = "";
    list_arr.forEach (function (item){
        result += "<div class=\"liststyle\">" + item + "    " + "<button onclick=\"removeItem(" + list_arr.indexOf(item) + ")\">Remove</button>" + " </div>";
    });
    console.log(result);
    document.getElementById("listdiv").innerHTML = result;
}

function removeItem(toRemove){
    console.log("REMOVING" + toRemove);
    document.getElementById("listalerts").innerHTML = "Removed " + list_arr[toRemove];
    list_arr.splice(toRemove, 1);
    updateList();
}

function addItem(){
    boxvalue = document.getElementById("box").value;
    let skip = false;
    if (boxvalue != ""){
        list_arr.forEach (function (item){
            if (item == boxvalue){
                document.getElementById("listalerts").innerHTML = "Cannot put duplicate item in list";
                skip = true;
            };
        });
        if (skip == false){
            list_arr.push(boxvalue);
            document.getElementById("listalerts").innerHTML = "Added!";
            console.log(boxvalue);
            console.log(list_arr);    
            updateList();    
        }
    } else {
        document.getElementById("listalerts").innerHTML = "Input cannot be empty!";
    }
}

initialize();