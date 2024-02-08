//all available keys

class Key {
    constructor(key, equivalents) {
        this.key = key
        this.equivalents = equivalents
    }

    isEquivalent(value) {
        return this.key === value || this.equivalents?.includes(value)
    }
}

const keys = [
    new Key('AC'),
    new Key('C', ['Backspace', 'Delete', 'c']),
    new Key('R'),
    new Key('^'),
    new Key('%'),
    new Key('Abs', ['A', 'a']),
    new Key('+-'),
    new Key('/'),
    new Key('7'),
    new Key('8'),
    new Key('9'),
    new Key('*'),
    new Key('4'),
    new Key('5'),
    new Key('6'),
    new Key('-', '_'),
    new Key('1'),
    new Key('2'),
    new Key('3'),
    new Key('+'),
    new Key('0'),
    new Key('.', [',']),
    new Key('=', ['Enter']),
]

export default keys
