let URL = "https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy";
let SUBFRM = document.getElementById("SBMT");
SUBFRM.addEventListener("click",(event) =>{
    event.preventDefault();
    let name = document.getElementById("NM").value;
    let des = document.getElementById("DES").value;
    let price = document.getElementById("PRICE").value;
    let qty = document.getElementById("QTY").value;

    let FOBJ = {name, des, price, qty};
    // console.log(FOBJ);

    document.getElementById("NM").value = '';
    document.getElementById("DES").value = '';
    document.getElementById("PRICE").value = '';
    document.getElementById("QTY").value = '';

    DATAOPER(FOBJ);
})

async function DATAOPER(OBJ){
    try{
        const response = await axios.post(URL,OBJ,{
            headers: {'Content-Type' : 'application/json'},
        })

        let UL = document.getElementById("UL");
        let LI = document.createElement('li');
        LI.classList.add("LI");
        let PLI = document.createElement('p');
        PLI.classList.add("PLI");
        PLI.innerHTML = `${response.data.name} ${response.data.des} ${response.data.price} ${response.data.qty}`;

        //BUY ONE PRODUCT
        let ONE = document.createElement('button');
        ONE.textContent = "Buy1";
        ONE.classList.add('ONE');
        ONE.addEventListener('click',async () => {
            try{
                const UpdateResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${response.data._id}`);
                const UpdateCandy = UpdateResponse.data;
                let candyi = parseInt(UpdateCandy.qty);
                if(candyi >= 1){
                    candyi -= 1;
                    let newvs = candyi.toString();
                    let newobj = {
                        name:UpdateCandy.name,
                        des: UpdateCandy.des,
                        price:UpdateCandy.price,
                        qty:newvs
                    };
                    await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${UpdateCandy._id}`,newobj,{
                        headers : {'Content-Type':'application/json'},
                    });
                    PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                }
            } catch (error) {
                console.log('Error : ',error);
            }
        })

        //BUY TWO PRODUCT
        let TWO = document.createElement('button');
        TWO.textContent = "Buy2";
        TWO.classList.add('ONE');
        TWO.addEventListener('click',async () => {
            try{
                const UpdateResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${response.data._id}`);
                const UpdateCandy = UpdateResponse.data;
                let candyi = parseInt(UpdateCandy.qty);
                if(candyi >= 1){
                    candyi -= 2;
                    let newvs = candyi.toString();
                    let newobj = {
                        name:UpdateCandy.name,
                        des: UpdateCandy.des,
                        price:UpdateCandy.price,
                        qty:newvs
                    };
                    await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${UpdateCandy._id}`,newobj,{
                        headers : {'Content-Type':'application/json'},
                    });
                    PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                }
            } catch (error) {
                console.log('Error : ',error);
            }
        })
        //BUY THREE PRODUCT
        let THREE = document.createElement('button');
        THREE.textContent = "Buy3";
        THREE.classList.add('ONE');
        THREE.addEventListener('click',async () => {
            try{
                const UpdateResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${response.data._id}`);
                const UpdateCandy = UpdateResponse.data;
                let candyi = parseInt(UpdateCandy.qty);
                if(candyi >= 1){
                    candyi -= 3;
                    let newvs = candyi.toString();
                    let newobj = {
                        name:UpdateCandy.name,
                        des: UpdateCandy.des,
                        price:UpdateCandy.price,
                        qty:newvs
                    };
                    await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${UpdateCandy._id}`,newobj,{
                        headers : {'Content-Type':'application/json'},
                    });
                    PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                }
            } catch (error) {
                console.log('Error : ',error);
            }
        })

        LI.appendChild(PLI);
        LI.appendChild(ONE);
        LI.appendChild(TWO);
        LI.appendChild(THREE);
        UL.appendChild(LI);

    } catch(error){
        console.log("Error : ",error);
    }
}
document.addEventListener('DOMContentLoaded',async () => {
    try {
        // Fetch the initial data from the API
        const response = await axios.get(URL);
        const candyData = response.data;

        let UL = document.getElementById('UL');

        // Loop through the data and create elements for each candy
        candyData.forEach(candy => {
            let LI = document.createElement('li');
            LI.classList.add('LI');
        
            let PLI = document.createElement('p');
            PLI.classList.add('PLI');
            PLI.innerHTML = `${candy.name} ${candy.des} ${candy.price} ${candy.qty}`;
        
            // BUY ONE PRODUCT
            let ONE = document.createElement('button');
            ONE.textContent = "Buy 1";
            ONE.classList.add('ONE');
            ONE.addEventListener('click', async () => {
                try {
                    // Fetch the latest data for the product
                    const updatedResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${candy._id}`);
                    const updatedCandy = updatedResponse.data;
                    let candyi = parseInt(updatedCandy.qty);
        
                    // Check if there's enough quantity to decrease
                    if (candyi >= 1) {
                        candyi -= 1;
                        let newvs = candyi.toString();
                        let newobj = {
                            name: updatedCandy.name,
                            des: updatedCandy.des,
                            price: updatedCandy.price,
                            qty: newvs
                        };
        
                        // Update the product's quantity
                        await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${updatedCandy._id}`, newobj, {
                            headers: { 'Content-Type': 'application/json' },
                        });
        
                        // Update the displayed information
                        PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                    }
                } catch (error) {
                    console.log('Error: ', error);
                }
            });
            // BUY TWO PRODUCT
            let TWO = document.createElement('button');
            TWO.textContent = "Buy2";
            TWO.classList.add('ONE');
            TWO.addEventListener('click', async () => {
                try {
                    // Fetch the latest data for the product
                    const updatedResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${candy._id}`);
                    const updatedCandy = updatedResponse.data;
                    let candyi = parseInt(updatedCandy.qty);
        
                    // Check if there's enough quantity to decrease
                    if (candyi >= 1) {
                        candyi -= 2;
                        let newvs = candyi.toString();
                        let newobj = {
                            name: updatedCandy.name,
                            des: updatedCandy.des,
                            price: updatedCandy.price,
                            qty: newvs
                        };
        
                        // Update the product's quantity
                        await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${updatedCandy._id}`, newobj, {
                            headers: { 'Content-Type': 'application/json' },
                        });
        
                        // Update the displayed information
                        PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                    }
                } catch (error) {
                    console.log('Error: ', error);
                }
            });
            // BUY THREE PRODUCT
            let THREE = document.createElement('button');
            THREE.textContent = "Buy3";
            THREE.classList.add('ONE');
            THREE.addEventListener('click', async () => {
                try {
                    // Fetch the latest data for the product
                    const updatedResponse = await axios.get(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${candy._id}`);
                    const updatedCandy = updatedResponse.data;
                    let candyi = parseInt(updatedCandy.qty);
        
                    // Check if there's enough quantity to decrease
                    if (candyi >= 1) {
                        candyi -= 3;
                        let newvs = candyi.toString();
                        let newobj = {
                            name: updatedCandy.name,
                            des: updatedCandy.des,
                            price: updatedCandy.price,
                            qty: newvs
                        };
        
                        // Update the product's quantity
                        await axios.put(`https://crudcrud.com/api/0ddccd3b7fff48bc887c54f848729791/candy/${updatedCandy._id}`, newobj, {
                            headers: { 'Content-Type': 'application/json' },
                        });
        
                        // Update the displayed information
                        PLI.innerHTML = `${newobj.name} ${newobj.des} ${newobj.price} ${newobj.qty}`;
                    }
                } catch (error) {
                    console.log('Error: ', error);
                }
            });
            // Append elements to the UL
            LI.appendChild(PLI);
            LI.appendChild(ONE);
            LI.appendChild(TWO);
            LI.appendChild(THREE);
            UL.appendChild(LI);
        });
    } catch (error) {
        console.log('Error : ', error);
    }
})
