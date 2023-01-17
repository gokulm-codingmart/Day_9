const readline = require(`readline-sync`)
class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(head){
        this.head = null;
    }

add(data){
    let newnode = new Node(data)
    if(this.head==null){
        this.head = newnode;
    }
    else{
        this.insertNode(this.head,newnode)  
    }
}
insertNode(node,newnode){
    
    if(newnode.data<node.data){
        if(node.left==null){
            node.left = newnode;
        }
        else{
            this.insertNode(node.left,newnode)
        }
        }
        else if(newnode.data>node.data){
            if(node.right==null){
                node.right = newnode;
            }
            else{
                this.insertNode(node.right,newnode)
            }
        }
}

inorder(node)
{
	if(node != null)
	{
		this.inorder(node.left);
        console.log(node.data);
		this.inorder(node.right);
	}
}

preorder(node)
{
	if(node != null)
	{
		console.log(node.data);
		this.preorder(node.left);
		this.preorder(node.right);
	}
}

postorder(node)
{
	if(node != null)
	{
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.data);
	}
}
Sum(node,sum){
    if(node==null){
        return sum;
    }
    else{
        if((node.left==null && node.right!=null) || (node.left!=null && node.right==null)){
            sum = sum + node.data;
            //console.log(node.data);
        }
    
    sum = this.Sum(node.left,sum);
    sum = this.Sum(node.right,sum);
    return sum;
    }
    
}
}

let bst = new BST()
while(true){
    let x  = parseInt(readline.question("Enter the number : "));
    if(x<0){
        break;
    }
    bst.add(x)
}
console.log("inorder");
bst.inorder(bst.head);
console.log("Addition performed : ")
let sum = 0;
console.log(bst.Sum(bst.head,sum))

