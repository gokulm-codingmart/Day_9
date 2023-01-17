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

removeRight(node){
    if(node==null){
        return 0;
    }
   else{
    let lft = this.removeRight(node.left)
    let rgt = this.removeRight(node.right)
    if(lft==0 && rgt==0){
        return -1;
    }
    if(rgt==-1){
        node.right=null;
        return 1;
    }
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
console.log("After deletion");
bst.removeRight(bst.head);
bst.inorder(bst.head)
