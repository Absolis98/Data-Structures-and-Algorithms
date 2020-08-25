import java.util.*;
public class SinglyLinkedListJava {
	public static void main(String[] args) {
		SinglyLinkedList list = new SinglyLinkedList();
		list.push(82);
		list.push(11);
		list.push(72);
		list.push(20);
		list.push(73);
		list.push(3);
		list.display();
	}
}
 
class Node {
	private int value;
	private Node next;
 
	public Node(int value) {
		this.value = value;
		this.next = null;
	}
 
	public void setNext(Node next) {
		this.next = next;
	}
 
	public Node getNext() {
		return next;
	}
 
	public void setVal(int val) {
		this.value = val;
	}
 
	public int getVal() {
		return value;
	}
}
 
class SinglyLinkedList {
	private Node head, tail;
	private int length;
 
	public SinglyLinkedList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
 
	public int getLength() {
		return this.length;
	} 
 
	public void push(int n) {
		Node newNode = new Node(n);
		length++;
		if(this.head == null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.setNext(newNode);
			this.tail = newNode;
		}
	}
 
	public int pop() {
		if(this.head != null) {
			Node iterator = this.head;
			Node pre = iterator;
			while(iterator.getNext() != null) {
				pre = iterator;
				iterator = iterator.getNext();
			}
			this.tail = pre;
			this.tail.setNext(null);
			length--;
			if(length==0) {
				this.head = null;
				this.tail = null;
			}
			return iterator.getVal();
		} else {
			return -1;
		}
	} 
 
	public int shift() {
		if(this.head != null) {
			int value = this.head.getVal();
			this.head = this.head.getNext();
			length--;
			if(length == 0) {
				this.tail = null;
				return value;
			}
			return value;
		} else {
			return -1;
		}
	}
 
	public void unShift(int value) {
		Node newNode = new Node(value);
		newNode.setNext(this.head);
		this.head = newNode;
		length++;
		if(length==1) {
			this.tail = newNode;
		}
	}
 
	public int get(int index) {
		if(index<0 || index>=length) {
			return -1;
		} else {
			Node iterator = this.head;
			for(int i=0; i<index; i++) {
				iterator = iterator.getNext();
			}
			return iterator.getVal();
		}
	}
 
	public boolean set(int index, int newValue) { 
		if(index<0 || index>=length) {
			return false;
		} else {
			Node iterator = this.head;
			for(int i=0; i<index; i++) {
				iterator = iterator.getNext();
			}
			iterator.setVal(newValue); 
			return true;
		}
	}
 
 
	public boolean insert(int index, int value) {
		if(index < 0 || index > length) {
			return false;
		} else if(index == 0) {
			unShift(value);
			return true;
		} else if(index == length) {
			push(value);
			return true;
		} else {
			Node iterator = this.head;
			Node pre = this.head;
			for(int i=0; i<index; i++) {
				pre = iterator;
				iterator = iterator.getNext();
			}
			length++;
			Node newNode = new Node(value);
			newNode.setNext(iterator);
			pre.setNext(newNode);  
			return true;
		}
	}  
 
//removes the element at the given index
	public int remove(int index) {
		if(index<0 || index>=length) {
			return -1;
		} else if(index == 0) {
			return shift();
		} else if(index == length-1) {
			return pop();
		} else {
			Node iterator = this.head;
			Node pre = this.head;
			for(int i=0; i<index; i++) {
				pre = iterator;
				iterator = iterator.getNext();
			}
			length--;
			pre.setNext(iterator.getNext());
			return iterator.getVal();
		}
	}
 
	public boolean reverse() {
		if(length == 0) {
			System.out.println("No linked list present.");
			return false;
		} else {
			Node iterator = this.head;
			this.head = this.tail;
			this.tail = iterator;
			Node pre = null;
			Node next;
			while(iterator.getNext() != null) {
				System.out.println(iterator.getVal());
				next = iterator.getNext();
				iterator.setNext(pre);
				pre = iterator;
				iterator = next;
			}
			iterator.setNext(pre);
 
			return true;
		}
	}
 
	public void display() {
		Node iterator = this.head;
		System.out.print("List: ");
		while(iterator != null) { 
			System.out.print(iterator.getVal()+" -> ");
			iterator = iterator.getNext();
		}
		System.out.println();
	}
 
	public void delete() {
		this.head = null;
		this.tail = null;
	}
 
}