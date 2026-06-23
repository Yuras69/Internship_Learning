const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener('click',async () => {
    const response = await fetch('https://6a3a1633917c7b14c74cb167.mockapi.io/Data',
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);

});

btn2.addEventListener('click',async () => {
    const response = await fetch('https://6a3a1633917c7b14c74cb167.mockapi.io/Data',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Ashwin',
            age: 23
        })
    });
    const data = await response.json();
    console.log(data);
});

btn3.addEventListener('click',async () => {
    const response = await fetch('https://6a3a1633917c7b14c74cb167.mockapi.io/Data/1',
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'JOhn Doe',
            age: 24
        })
    })
    const data = await response.json();
    console.log(data);
});

btn4.addEventListener('click',async () => {
    const response = await fetch('https://6a3a1633917c7b14c74cb167.mockapi.io/Data/1',
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
});



