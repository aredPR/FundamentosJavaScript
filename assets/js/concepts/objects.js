const phone = {
    brand: 'Samsung',
    SO: 'Android',
    ram: '4GB',
    hdd: '260GB',
    isCleaned: false
};

console.log(phone);
console.log(phone.brand);
phone.isCleaned = true;

phone.color = 'black';
phone['case color'] = 'grey';
console.log(phone);
console.log(phone['color']);

phone.start = function(){
    console.log('Mi ' + this.brand + '...');
    console.log('Starting...');
    console.log('Started!!!');
}

phone.call = function(name){
    console.log('Llamando a ' + name);
    console.log('No contesto ;/');
}

phone.start();
phone.call('Batman');