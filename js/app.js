const next = document.querySelector('.nextBtn')
const previous = document.querySelector('.prevBtn')
const customerImage = document.getElementById('customer-img')
const customerName = document.getElementById('customer-name')
const customerText = document.getElementById('customer-text')

//data
customers = []

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

//create new customer
function createCustomer(img, name, text) {
    let custImg = `./img/customer-${img}.jpg`
    let customer = new Customer(custImg, name, text)

    customers.push(customer)
}

//customer constructor
function Customer(img, name, text) {
    this.img = img
    this.name = name
    this.text = text
}

next.addEventListener('click', nextTestimonial)
previous.addEventListener('click', previousTestimonial)

let customerIndex = 0

function nextTestimonial() {
    customerIndex++
    if (customerIndex > customers.length - 1) {
        customerIndex = 0
        customerImage.src = customers[customerIndex].img
        customerName.innerText = customers[customerIndex].name
        customerText.innerText = customers[customerIndex].text
    } else {
        customerImage.src = customers[customerIndex].img
        customerName.innerText = customers[customerIndex].name
        customerText.innerText = customers[customerIndex].text
    }
}

function previousTestimonial() {
    customerIndex--
    if (customerIndex < 0) {
        customerIndex = customers.length - 1
        customerImage.src = customers[customerIndex].img
        customerName.innerText = customers[customerIndex].name
        customerText.innerText = customers[customerIndex].text
    } else {
        customerImage.src = customers[customerIndex].img
        customerName.innerText = customers[customerIndex].name
        customerText.innerText = customers[customerIndex].text
    }
}
