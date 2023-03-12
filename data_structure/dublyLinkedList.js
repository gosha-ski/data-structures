		

class DublyLinkedNode{
	constructor(value){
		this.value = value
		this.next = null
		this.previous = null
	}
}

class DublyLinkedList{
	constructor(){
		this.head = null
		this.tail = null
	}

	append(value){
		let node = new DublyLinkedNode(value)
		if(this.tail == null){
			this.tail = node
			this.head = node
		}else{
			node.previous = this.tail
			this.tail.next = node
			this.tail = node
		}
	}

	prepend(value){
		let node = new DublyLinkedNode(value)
		if (this.head == null){
			this.head = node
			this.tail = node
		}else{
			node.next = this.head
			this.head.previous = node
			this.head = node
		}

	}

	deleteByValue(value){
		let currentNode = this.head
		while(currentNode){
			if(currentNode.value == value){
				currentNode.next.previous = currentNode.previous
				currentNode.previous.next = currentNode.next
				currentNode = currentNode.next

			}else{
				currentNode = currentNode.next
			}
		}
	}

	reverse(){
		let currentNode = this.head
		while(currentNode){
			let next = currentNode.next
			let dup_previous = currentNode.previous
			let dup_next = currentNode.next
			currentNode.next = dup_previous
			currentNode.previous = dup_next
			currentNode = next
		}
		let head = this.head
		this.head = this.tail
		this.tail = head

	}
}

let list = new DublyLinkedList()

list.append(1)
list.append(2)
list.append(3)

//list.deleteByValue(2)
console.log(list)
list.reverse()
console.log(list)