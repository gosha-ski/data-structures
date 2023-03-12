class Node{
	constructor(value){
		this.left = null
		this.right = null
		this.value = value
	}
}

//binary search tree BST
class BST{
	constructor(){
		this.root = null
	}

	add(value){
		let node = new Node(value)
		if(this.root == null){
			this.root = node
		}else{
			let currentNode = this.root
			while(currentNode){
				if(value == currentNode.value){
					return undefined
				}else if(currentNode.value > value){
					if(currentNode.left){
						currentNode = currentNode.left
					}else{
						currentNode.left = node
						return this
					}

				}else{
					if(currentNode.right){
						currentNode = currentNode.right
					}else{
						currentNode.right = node
						return this
					}

				}
			}
			return undefined
		}
	}

	find(value){
		let currentNode = this.root
		while(currentNode){
			if(value == currentNode.value){
				return currentNode
			}else if(value < currentNode.value){
				if(currentNode.left){
					currentNode = currentNode.left
				}else{
					return false
				}

			}else{
				if(currentNode.right){
					currentNode = currentNode.right
				}else{
					return false
				}

			}
		}
		return false
	}
}

let bst = new BST()

bst.add(30)
bst.add(20)
bst.add(10)
bst.add(9)
bst.add(5)
bst.add(11)
bst.add(3)
bst.add(30)
console.log(bst)
console.log(bst.find(3))
let proto = Object.getPrototypeOf(bst)
let proto_proto = Object.getPrototypeOf(proto)
console.log(proto)