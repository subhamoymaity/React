
function Hello() {
    let myname = 'Subhamoy Maity';
    let number = 334;
    let fullName = () => {
        return 'Bakul Maity';
    }

    const person = {
        name: 'John',
        age: 30,

        // Method that introduces the person
        introduce: function () {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };

    // Write JSX with JavaScript expressions inside {}
    return (
        <h4>
            Message: {number}. I am your master {myname}. <br />
            I am your father {fullName()}. <br />
            {person.introduce()}
        </h4>
    );
}

export default Hello;
