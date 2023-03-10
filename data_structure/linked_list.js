class Node{
	element
	next
	constructor(elem){
		this.element = elem
		this.next = null
	}
}

class LinkedList{
	head = null
	length = 0

	add(element){
		let node = new Node(element)
		if(this.head == null){
			this.head = node
		}else{
			let currentNode = this.head
			while(currentNode.next){
				currentNode = currentNode.next
			}
			currentNode.next = node
		}
		this.length = this.length + 1
	}

	indexOf(element){
		let index=0
		let currentNode = this.head
		while(currentNode){
			if(currentNode.element == element){
				return index
			}
			currentNode = currentNode.next
			index++
		}
	}

	elementAt(index){

		let currentNode = this.head
		let currentIndex = 0
		while(currentNode){
			if(currentIndex==index){
				return currentNode
			}
			currentNode = currentNode.next
			currentIndex++
		}
	}

	removeAt(index){
		if(index == 0){
			this.head = this.elementAt(1)
			this.length--
			return this.head
		}else{
			let currentNode = this.head
			let element = this.elementAt(index-1)
			element.next = element.next.next
			this.length = this.length - 1
			return this.head
		}

	}

	addAt(index, node){ //add with replacing
		if(index == 0){
			node.next = this.elementAt(1)
			this.head = node
		}else{
			let nextNode = this.elementAt(index+1)
			let prevNode = this.elementAt(index-1)
			node.next = nextNode
			prevNode.next = node
		}
	}
}

// let linkedList = new LinkedList()
// linkedList.add("first")
// linkedList.add("second")
// linkedList.add("third")
// linkedList.add("four")
// linkedList.add("five")
// console.log(linkedList)
// // console.log(linkedList.indexOf("five"))
// //console.log(linkedList.elementAt(0))
// //linkedList.removeAt(2)
// console.log(linkedList)
// linkedList.addAt(0, new Node("gosha"))
// console.log(linkedList)