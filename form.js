    const form = document.querySelector('#myForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value; 

    const response= await fetch ("https://6a3a1633917c7b14c74cb167.mockapi.io/data",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            age: age
        })
    });
    const data = await response.json();
    console.log(data);
    });

    const form2 = document.querySelector('#mydelete');

    form2.addEventListener('submit', async (event) => {
        event.preventDefault();
        const id = document.getElementById('id').value;
        const response = await fetch(`https://6a3a1633917c7b14c74cb167.mockapi.io/data/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    });

    const form3 = document.querySelector('#getdata');

    form3.addEventListener('submit', async (event) => {
        event.preventDefault();
        const response = await fetch('https://6a3a1633917c7b14c74cb167.mockapi.io/data', {
            method: 'GET',
            headers: {   
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        const output = data.map(item => `<p>ID: ${item.id}, Name: ${item.name}, Age: ${item.age}</p>`).join('');
        document.getElementById('response').innerHTML = output;
    });