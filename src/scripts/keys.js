//all available keys

class Key {
    constructor(key, equivalents, view) {
        this.key = key
        this.equivalents = equivalents
        this.view = view
    }

    isEquivalent(value) {
        return this.key === value || this.equivalents?.includes(value)
    }
}

const keys = [
    new Key('AC'),
    new Key('C', ['Backspace', 'Delete', 'c']),
    new Key('%'),
    new Key('/', [], '&#xF7'),
    new Key('7'),
    new Key('8'),
    new Key('9'),
    new Key('*', [], '&#215'),
    new Key('4'),
    new Key('5'),
    new Key('6'),
    new Key('-', '_'),
    new Key('1'),
    new Key('2'),
    new Key('3'),
    new Key('+'),
    new Key('+-', [], '&plusmn'),
    new Key('0'),
    new Key('.', [',']),
    new Key('=', ['Enter']),
]

export default keys
