var oldData = { "id": 1, "first_name": "Eric", "last_name": "Henry", "info": { "email": "ehenry0@smh.com.au", "gender": "Male", "ip_address": "7.11.169.150", "age": 11 }
}; 
var newData = { "id": 2, "first_name": "Tommy", "last_name": "Henry", "info": { "email": "tommy@ghenrry.com", "gender": "Male", "ip_address": "7.11.169.150", "age": 15 }
};

function compareUserData(oldData, newData, result) {
    Object.keys(oldData).forEach(function (k) {
        if (typeof oldData[k] !== 'object') {
            if (oldData[k] != newData[k]) this.push({'old': oldData[k], 'new': newData[k]});
        } else {
            compareUserData(oldData[k], newData[k], this);
        }
    }, result);

    return result;
}

var result = compareUserData(oldData, newData, []);
console.log(result);