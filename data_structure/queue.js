class Queue{
	storage = []
	enqueue(elem){
		this.storage.push(elem)

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
// let queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(5)
// queue.enqueue(56)
// console.log(queue.storage)
// console.log(queue.dequeue())
// console.log(queue.storage)
// console.log(queue.dequeue())
// console.log(queue.storage)
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.isEmpty())


//console.log([1,4,5,56,32,"gg"].slice(0,3))