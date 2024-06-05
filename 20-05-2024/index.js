const coder = {
    firstName: 'Ivan',
    lastName: 'Saltaformaggio',
    age: 28,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Palermo',
        zipCode: '90100'
    }
};

// 1. Stampare un console.log per ogni skill presente in coder.skills
coder.skills.forEach(skill => {
    console.log(skill);
});

// 2. Salvare dentro "coder.address" due nuove proprietà da chiedere all'utente tramite prompt: "country" e "street".
const country = prompt('Inserisci il tuo paese (country):');
const street = prompt('Inserisci la tua via (street):');
coder.address.country = country;
coder.address.street = street;
console.log(coder.address);

// 3. Stampare in console tutte le chiavi presenti dentro il mio oggetto.
Object.keys(coder).forEach(key => {
    console.log(key);
});

// 4. Controllare la chiave di ogni proprietà e stampare chiave e valore se la prima lettera è una vocale.
const vowels = ['a', 'e', 'i', 'o', 'u'];
Object.entries(coder).forEach(([key, value]) => {
    if (vowels.includes(key.charAt(0).toLowerCase())) {
        console.log(`${key}: ${value}`);
    }
});

// 5. Chiedere all'utente una nuova chiave e un nuovo valore da salvare nel nostro oggetto.
const newKey = prompt('Inserisci una nuova chiave:');
const newValue = prompt('Inserisci un nuovo valore:');
coder[newKey] = newValue;

console.log(coder);
