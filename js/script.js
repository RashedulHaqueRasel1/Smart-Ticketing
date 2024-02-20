

let maines = 40;
let add = 0;
let seatPrice = 550;


const divHidden = document.getElementById("div-hidden");
const btnCoupon = document.getElementById("btn-coupon");
const inputCoupon = document.getElementById("input-coupon");
const Price = document.getElementById("total-price");
const grandPrice = document.getElementById("grand-total");
const keys = document.getElementsByClassName("kyb");




for (const key of keys) {

  // console.log(key.innerHTML)
  key.addEventListener('click', function (e) {
    // console.log(key)


    if (add === 4) {
      alert("Sorry ! You Select Only 4 Seat.")
      return;
    }

    this.classList.add("pointer-events-none");


    // Seat Maines
    maines = maines - 1;
    document.getElementById("seat-maines").innerText = maines;


    //Seat Add
    add = add + 1;
    document.getElementById('seat-add').innerText = add;


    // Btn Color
    key.style.backgroundColor = '#1DD100';
    key.style.color = 'white';



    // Total Price
    const TotalPrice = add * seatPrice;
    document.getElementById("total-price").innerText = TotalPrice.toFixed(2);
    // console.log(TotalPrice)



    // Grand Price
    const totalAmount = add * seatPrice;
    document.getElementById("grand-total").innerText = totalAmount;



    // Show Title
    const title = document.getElementById("show");
    // console.log(title)

    const div = document.createElement("div");
    div.classList.add('flex', 'justify-between')
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    const keyInnerText = key.innerText;

    // console.log(keyInnerText)

    p.innerText = keyInnerText  ;
    p2.innerText = 'Economoy'  ;
    p3.innerText = '550'  ;

    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    title.appendChild(div)



    // Number Check & Btn Disabled / 

    document.getElementById('input-dlt').addEventListener('keyup', function (event){
      const text = event.target.value ;
      // const test = parseInt(text);
      // console.log(text)
      const delateBtn = document.getElementById('btn-dlt') ;
      if (text.length > 2 ) {
    
        delateBtn.removeAttribute('disabled');
        
        // console.log("Ok")
        
      } 
      else {
        
        delateBtn.setAttribute('disabled', true)
        // console.log("No")
      }
    })



    // coupon


    
  })


}



//  Button Disabled

  document.getElementById("input-coupon").addEventListener("keyup", function(e){
    const test2 = e.target.value;
  
    if (test2 === 'NEW15' || test2 ===  "Couple 20") {
      document.getElementById("btn-coupon").removeAttribute('disabled');
    } 
    else {
      document.getElementById("btn-coupon").setAttribute('disabled', true)
    }
  })
  


// Coupon Check 

btnCoupon.addEventListener("click", function () {
  const inputValue = inputCoupon.value;


    if (add === 4) {

 
      if (inputValue === "NEW15") {
        // console.log(inputValue);
        
        const totalAmount = add * seatPrice;

        const Discount = (totalAmount * 0.15);
        const discountAmount = totalAmount - Discount;
        
        // console.log(discountAmount)

        document.getElementById("grand-total").innerText = discountAmount;

        document.getElementById("div-hidden").style.display = 'none' ;


      }
      else if (inputValue === "Couple 20") {
        // console.log(inputValue2)
        const totalAmount2 = add * seatPrice;

        const Discount2 = (totalAmount2 * 0.20);
        const discountAmount2 = totalAmount2 - Discount2;
 
        // console.log(discountAmount2)

        document.getElementById("grand-total").innerText = discountAmount2;

        document.getElementById("div-hidden").style.display = 'none' ;


      }
      else {
        alert('Please Input valid Coupon Code') ;

      }
    }
    


})





