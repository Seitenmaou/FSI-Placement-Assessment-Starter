let yourName = "Euri Tanaka" 
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

//update page with quantity of each type and total
const qtyTtl = document.querySelector('#qty-total')
function updateQuantity(cookieType, cookieAmt)
{
    cookieType.textContent = cookieAmt
    qtyTtl.textContent = gb + cc + sugar
}

//GingerBread
const qtyGB = document.querySelector('#qty-gb')
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function() {
    updateQuantity(qtyGB, ++gb)
})
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0)
    {
        updateQuantity(qtyGB, --gb)
    }
})

//Chocolate Chip
const qtyCC = document.querySelector('#qty-cc')
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function() {
    updateQuantity(qtyCC, ++cc)
})
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0)
    {
        updateQuantity(qtyCC, --cc)
    }
})

//Sugar Sprinkle
const qtySugar = document.querySelector('#qty-sugar')
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function() {
    updateQuantity(qtySugar, ++sugar)
})
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0)
    {
        updateQuantity(qtySugar, --sugar)
    }
})