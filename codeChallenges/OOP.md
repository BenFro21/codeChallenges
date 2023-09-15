# OOP
Object oriented programming (OOP) isn't a language or a tool. OOP is a style of programming — what we call a programming paradigm. The four pillars of object oriented programming are:
## Encapsulation
-  Encapsulation is defined as _the action of enclosing something in, or as if in, a capsule_.
- In OOP encapsulation is in objects 
## Abstraction 
- Abstraction is a concept that is closely related to encapsulation. It's also a way to remove complexity. Think of your phone. It's got a pretty simple user _**interface**_: maybe it has a screen and one button (maybe not even a button!), but the internal logic board of the phone is super complicated. As a user, we don't need to know anything about how the phone's logic board works in order to use it. This is an example of abstraction in the real world.
- Abstraction is done in the planning phase while encapsulation is done while putting that plan to action 
## Inheritance
- One of the chief problems with encapsulating all of our code into self contained objects is that there's a strong possibility that we'll have lots of duplicated code among objects of a similar type. Inheritance helps us solve that problem.
- as a user you can ;be an admin or customer. You can put everything they have in common in an object called user and have admin and customers inherit those traits 

# Javascript and OOP
- javascript, python, ruby, c#, c+ are all OOP languages. But dont stricly treat everything as an object 
- Javascript uses prototypes instead of classes. We can write our code in object oriented style following its princeaples 

# Constructors 
- Always start with a capital letter
- are always used with the new Keyword 
- The NEW Keword in javascript does the following in order
1 Creates an empty object
2 attaches the constructor function to the object as a property 
3 invokes the constructor function as a method on the object 
4 returns the object 
- A new object created this way is called an instance of the constructor class 

# Classes 
- There are not REAL classes in javascript. More of a sytatic suger 
Example: 
class Car {
    constructor(make, model, color ){
        this.make= make
        this.model = model 
        this.color = color 
    }
    drive() {
        console.log('vroom vroom')
    }
}
- When generating instances of this class use the new Keyword
- const corolla = new Car('Toyota', 'Corolla', 'silver')
- The new keyword will automatically:
1 Creates an empty object ({}).
2 Attaches the constructor function to the object as a property.
3 Invokes the constructor function as a method on the object.
4 Returns the object.

# inheritance in Javascript 
- can use the extend keyword to create a sub class 
- use the super keyword to take the properties of the parent class 