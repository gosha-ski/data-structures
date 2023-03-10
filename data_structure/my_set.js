class MySet{
	storage = []
	length = 0


	has(element){
		let index = this.storage.indexOf(element)
		if(index==-1){
			return false
		}
		return true
	}

	values(){
		this.storage.forEach(function(item){
			console.log(item)
		})
	}

	add(element){
		if(!this.has(element)){
			this.storage.push(element)
			this.length++
		}else{
			console.log("already exist")
			return "already exist"
		}
	}

	remove(element){
		if(this.has(element)){
			let index = this.storage.indexOf(element)
			this.storage.splice(index, 1)
			this.length--
		}else{
			console.log("dont exist thet element")
		}
	}

	union(set){
		let unionValues = []
		this.storage.forEach(function(item){
			if(set.has(item)){
				unionValues.push(item)
			}
		})
		return unionValues
	}

	isSubsetOf(set){
		let count = 0
		this.storage.forEach(function(item){
			if(set.has(item)){
				count++
			}
		})
		if(count == this.storage.length){
			return true
		}else{
			return false
		}
	}
}

// let mySet = new MySet()

// let secondSet = new MySet()
// secondSet.add(2)
// secondSet.add("hi")
// secondSet.add(5)
// secondSet.add(6)
// secondSet.add("gosha")
// secondSet.add(0)
// secondSet.add(1)
// secondSet.add(4)
// secondSet.remove(4)



// mySet.add(0)
// mySet.add(1)
// mySet.add("gosha")
// mySet.add(4)
// mySet.add("hi")
// mySet.add(0)

// mySet.values()
// //mySet.remove("hi")
// console.log(mySet)
// console.log(mySet.union(secondSet))
// console.log(mySet.isSubsetOf(secondSet))
