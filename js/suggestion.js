var suggestion = ["Anchor",
  "Aluminium ",
  "Asianpaint",
  "Acc Blocks",
  "Ambuja cement",
  "Aluminium Door",
  "Apollo Chaukhat",

  "Baja",
  "basin",
  "Brass",
  "Bosch",
  "bowl sink",
  "Best offers",
  "Bathroom tiles",

  "Cera",
  "Cement",
  "Chimney",
  "Chaukhat",
  "Cera basin",
  "Cera Brass",
  "Cera shower",
  "Cera shower Panel",
  "Corner Wall Shelf",

  "Door",
  "Dr Fixit",
  "door lock",
  "Dual Spout",
  "drainboard",
  "Door handle",
  "Deals of the Day",

  "Electric Fan",
  "Electric Switch",
  "Edison Screw Cap",
  "Electric Appliances",

  "Finolex",
  "Flooring",
  "Furniture",
  "Floor Tiles",

  "glanz",
  "godrej",
  "Granite",
  "Granite Sink",
  "Glass Window",

  "Hand Shower",
  "Hindware",
  "Havells",
  "Hollow core Doors",

  "Indian tiles",
  "Indian Switch",
  "Indian Bathroom",
  "Indian Kitchen",
  "Integrated sink",

  "Jsw",
  "Jaquar",
  "Jindal Panther",

  "Kitchen",
  "Kajaria",
  "Kitchen Tap",
  "Kitchen Tile",
  "Kitchen Chimney",
  "Kitchens Floor Tiles",

  "lever",
  "Light",
  "Legrand",
  "Luxury Tap",

  "Marble",
  "Mixer Tap",
  "Modern Tap",
  "Marble Sink",
  "Modern Light",
  "modern switches",

  "New tiles",
  "New Switch",
  "New Bathroom",
  "New Kitchen",

  "Other",
  "orient",

  "Panel",
  "Parryware",
  "Power Unit",

  "Quartz Sink",

  "Red Tile",
  "Red Paint",

  "Shink",
  "Socket",
  "Shower",
  "Steel Door",
  "Single bowl",
  "Steel Brass",
  "Shower Panel",
  "Single lever",
  "Steel Chaukhat",
  "Sink with drainboard",
  "Stainless Steel Sink",

  "Tap",
  "Tile",
  "Top Tap",
  "TV Socket",
  "Tata Steel",
  "Twin lever",
  "Towel holder",
  "Trending offers",
  "Top Mounted Chimney",

  "Unik",
  "UPVC Door",
  "USB Charger",
  "Undermount sink",
  "Ultratech Cement",

  "V",
  "V-mark",
  "Vinyl Door",
  "Valance lighting",
  
  "Wire",
  "Wood Door",
  "Water pipe",
  "Water pump",
  "Water tank",
  "Window lock",
  "White Cement",
  "Wood Chaukhat",
  "Wood flooring",
  "Wall Mounted Chimney",

  "X",

  "Y",

  "Z"

]


autocomplete(document.getElementById("myInput"), suggestion);

var device_width_ch = window.matchMedia("(max-width: 992px)");

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/  /*i tag to make search icon */
        b.innerHTML ='<i class="fa fa-search"></i>'+ "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML +=arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });

        /*---change css with on scroll start---*/

        window.onscroll = function () {scroll_ch_Funcion()};
        scroll_ch_Funcion()

        function scroll_ch_Funcion() {
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              if (device_width_ch.matches) {
              a.style.marginLeft="48px";
              a.style.marginRight="36.5px";


              //mybutton.style.display = "block";
              menun1.classList.add('open');
              menun2.classList.add('open');
              menun3.classList.add('open');
              menun4.classList.add('open');
              menun5.classList.add('open');
              menun6.classList.add('open');
              menun8.classList.add('open');

              menun4.classList.add('navbar_sh');
              search_input.classList.add('open');
              search_btn.classList.add('open');
            }
            else{
              return 0;
            }
          }

          else{

            a.style.marginLeft="0px";
            a.style.marginRight="0px";


            //mybutton.style.display = "none";
            menun1.classList.remove('open');
            menun2.classList.remove('open');
            menun3.classList.remove('open');
            menun4.classList.remove('open');
            menun5.classList.remove('open');
            menun6.classList.remove('open');
            menun8.classList.remove('open');

            menun4.classList.remove('navbar_sh');
            search_input.classList.remove('open');
            search_btn.classList.remove('open');
          }
        }
        /*---change css with on scroll end---*/

        a.appendChild(b);
      }
    }
  });
  
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

