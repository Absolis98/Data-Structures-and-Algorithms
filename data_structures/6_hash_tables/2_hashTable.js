class HashTable {
	constructor(size=53){
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		const PRIME = 31;
		for(let i = 0; i < Math.min(key.length, 10); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, val) {
		const index = this._hash(key);
		if(!this.keyMap[index]){
			this.keyMap[index] = [];
		}
		for(let i = 0; this.keyMap[index].length; i++) {
			if(this.keyMap[index][i][0] === key)
				return this.keyMap[index][i][1] = val;
		}
		this.keyMap[index].push([key, val]);
	}

	get(key) {
		const index = this._hash(key);
		if(this.keyMap[index]){
			for(let i = 0; i < this.keyMap[index].length; i++) {
				if(this.keyMap[index][i][0] === key)
					return this.keyMap[index][i][1];
			}
		}
		return undefined;
	}

	keys() {
		const keysArr = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!keysArr.includes(this.keyMap[i][j][0]))
						keysArr.push(this.keyMap[i][j][0]);
				}
			}
		}
		return keysArr;
	}

	values() {
		const valuesArr = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!valuesArr.includes(this.keyMap[i][j][1]))
						valuesArr.push(this.keyMap[i][j][1]);
				}
			}
		}return valuesArr;
	}
}


let ht = new HashTable();
ht.set('yellow', 'goodbye!');
ht.set('yellow', 'yep!');
ht.set('red', 'hello!');
ht.set('blue', 'goodbye!');
ht.set('blue', 'hello!');
ht.set('blue', 'byebye!');
console.log(ht);
console.log(ht.get('blue'));
console.log(ht.keys());
console.log(ht.values());