class PriorityQueue{
	storage = []
	enqueue(elem){  // elem:{value: data, prioritet: number}
		if(this.isEmpty()){
			this.storage.push(elem)
		}else{
			if(this.storage[this.size()-1].priorotet<=elem.prioritet){
				this.storage.push
			}else if(this.storage[0].prioritet>=elem.prioritet){
				this.storage.unshift(elem)
			}else{
				for(let i=0; i<this.storage.length-1; i++){
					if(this.storage[i].prioritet<=elem.prioritet && this.storage[i+1]>=elem.prioritet){
						this.storage.splice(i,0, elem)
					}
				}
			}
		}

	}

	dequeue(){
		if(this.storage.length==0){
			return undefined
		}else{
			let result = this.storage[0]
			this.storage.splice(0,1)
			return result
		}

	}

	front(){
		return this.storage[0]
	}

	isEmpty(){
		if(this.storage.length==0){
			return true
		}else{
			return false
		}
	}

	size(){
		return this.storage.length
	}
}

// let queue = new PriorityQueue()

// queue.enqueue({value: 1, prioritet: 21})
// queue.enqueue({value: 1, prioritet: 2})
// queue.enqueue({value: 1, prioritet: 1})
// queue.enqueue({value: 1, prioritet: 4})
// queue.enqueue({value: 1, prioritet: 1})
// queue.enqueue({value: 1, prioritet: 1})
// console.log(queue.storage)