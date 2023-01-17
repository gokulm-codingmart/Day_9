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
ancestor(node,n1,n2){
    if(node==null){
        return null;
    }
    let val = true;

   while(val){

    if((n1>node.data && n2<node.data) || (n1<node.data && n2>node.data)){
        return node.data;
    }//left
    else if(n1<node.data && n2<node.data){
        if(node.left!=null){
            node = node.left;
        }
    }//right
    else if(n1>node.data && n2>node.data){
        if(node.right!=null){
            node = node.right;
        }
    }
    else{
        console.log(node.data);
        val = false;
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
// bst.add(40);
// bst.add(30);
// bst.add(10);
// bst.add(45);
// bst.add(50);
// bst.add(46);
console.log("inorder");
bst.inorder(bst.head);
console.log("Ancestor");
console.log(bst.ancestor(bst.head,20,60));
