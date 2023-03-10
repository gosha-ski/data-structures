class Stack{
	storage = []

	push(elem){
		this.storage.push(elem)
	}

	pop(){
		if(this.storage.length==0){
			return undefined
		}
		let lastIndex = this.storage.length-1
		let result = this.storage[lastIndex]
		this.storage.pop()
		return result
	}

	peek(){
		if(this.storage.length==0){
			return undefined
		}
		let lastIndex = this.storage.length-1
		return this.storage[lastIndex]
	}
	length(){
		return this.storage.length
	}
}

// let stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack.storage)
// console.log(stack.pop())
// console.log(stack.storage)
// console.log(stack.peek())
// stack.push(55)
// stack.push(52)
// console.log(stack.storage)
// console.log(stack.length())
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.storage)
// console.log(stack.pop())


