
const keyLayout = [
    [
        {
            id: "Backquote",
            size: 's',
            upper: '~',
            lower: '`',
        },
        {
            id: 'Digit1',
            size: 's',
            upper: '!',
            lower: '1',
        },
        {
            id: 'Digit2',
            size: 's',
            upper: '@',
            lower: '2',
        },
        {
            id: 'Digit3',
            size: 's',
            upper: '#',
            lower: '3',
        },
        {
            id: 'Digit4',
            size: 's',
            upper: '$',
            lower: '4',
        },
        {
            id: 'Digit5',
            size: 's',
            upper: '%',
            lower: '5',
        },
        {
            id: 'Digit6',
            size: 's',
            upper: '^',
            lower: '6',
        },
        {
            id: 'Digit7',
            size: 's',
            upper: '&',
            lower: '7',
        },
        {
            id: 'Digit8',
            size: 's',
            upper: '*',
            lower: '8',
        },
        {
            id: 'Digit9',
            size: 's',
            upper: '(',
            lower: '9',
        },
        {
            id: 'Digit0',
            size: 's',
            upper: ')',
            lower: '0',
        },
        {
            id: "Minus",
            size: 's',
            upper: '_',
            lower: '-',
        },
        {
            id: 'Equal',
            size: 's',
            upper: '+',
            lower: '=',
        },
        {
            id: 'backspace',
            size: 'm',
            text: 'backspace',
            position: "",
        },

    ],
    // Second row
    [
        {
            id: 'Tab',
            size: 'm',
            text: 'tab',
            position: "Left",
        },
        {
            id: 'KeyQ',
            size: 's',
            upper: 'Q',
            lower: 'q',
        },
        {
            id: 'KeyW',
            size: 's',
            upper: 'W',
            lower: 'w',
        },
        {
            id: 'KeyE',
            size: 's',
            upper: 'E',
            lower: 'e',
        },
        {
            id: 'KeyR',
            size: 's',
            upper: 'R',
            lower: 'r',
        },
        {
            id: 'KeyT',
            size: 's',
            upper: 'T',
            lower: 't',
        },
        {
            id: 'KeyY',
            size: 's',
            upper: 'Y',
            lower: 'y',
        },
        {
            id: 'KeyU',
            size: 's',
            upper: 'U',
            lower: 'u',
        },
        {
            id: 'KeyI',
            size: 's',
            upper: 'I',
            lower: 'i',
        },
        {
            id: 'KeyO',
            size: 's',
            upper: 'O',
            lower: 'o',
        },
        {
            id: "KeyP",
            size: 's',
            upper: 'P',
            lower: 'p',
        },
        {
            id: "BracketLeft",
            size: 's',
            upper: '{',
            lower: '[',
        },
        {
            id: "BracketRight",
            size: 's',
            upper: '}',
            lower: ']',
        },
        {
            id: "Backslash",
            size: 's',
            upper: '|',
            lower: '\\',
        },

    ],
    // Third row
    [
        {
            id: 'CapsLock',
            size: 'l',
            text: 'caps lock',
            position: "Left",
        },
        {
            id: 'KeyA',
            size: 's',
            upper: 'A',
            lower: 'a',
        },
        {
            id: "KeyS",
            size: 's',
            upper: 'S',
            lower: 's',
        },
        {
            id: 'KeyD',
            size: 's',
            upper: 'D',
            lower: 'd',
        },
        {
            id: "KeyF",
            size: 's',
            upper: 'F',
            lower: 'f',
        },
        {
            id: 'KeyG',
            size: 's',
            upper: 'G',
            lower: 'g',
        },
        {
            id: "KeyH",
            size: 's',
            upper: 'H',
            lower: 'h',
        },
        {
            id: 'KeyJ',
            size: 's',
            upper: 'J',
            lower: 'j',
        },
        {
            id: "KeyK",
            size: 's',
            upper: 'K',
            lower: 'k',
        },
        {
            id: 'KeyL',
            size: 's',
            upper: 'L',
            lower: 'l',
        },
        {
            id: "Semicolon",
            size: 's',
            upper: ':',
            lower: ';',
        },
        {
            id: "Quote",
            size: 's',
            upper: '"',
            lower: "'",
        },
        {
            id: "Enter",
            size: 'xl',
            position: 'Right',
            text: 'enter',
        },

    ],
    // Fourth row
    [
        {
            id: "ShiftLeft",
            size: 'xxl',
            text: 'shift',
            position: "Left",
        },
        {
            id: 'KeyZ',
            size: 's',
            upper: 'Z',
            lower: 'z',
        },
        {
            id: "KeyX",
            size: 's',
            upper: 'X',
            lower: 'x',
        },
        {
            id: 'KeyC',
            size: 's',
            upper: 'C',
            lower: 'c',
        },
        {
            id: "KeyV",
            size: 's',
            upper: 'V',
            lower: 'v',
        },
        {
            id: 'KeyB',
            size: 's',
            upper: 'B',
            lower: 'b',
        },
        {
            id: "KeyN",
            size: 's',
            upper: 'N',
            lower: 'n',
        },
        {
            id: 'KeyM',
            size: 's',
            upper: 'M',
            lower: 'm',
        },
        {
            id: "Comma",
            size: 's',
            upper: '<',
            lower: ',',
        },
        {
            id: "Period",
            size: 's',
            upper: '>',
            lower: '.',
        },
        {
            id: "Slash",
            size: 's',
            upper: '?',
            lower: '/',
        },
        {
            id: 'ShiftRight',
            size: 'xxl',
            text: 'shift',
            position: 'Right',
        },

    ],
    // Fourth row
    [
        {
            id: "Key",
            size: 'sm',
            text: 'fn',
            position: "Left",
        },
        {
            id: "ControlLeft",
            size: 'sm',
            text: 'control',
            position: "Left",
        },
        {
            id: "AltLeft",
            size: 'sm',
            text: 'alt',
            position: "Left",
        },
        {
            id: "MetaRight",
            size: 'm',
            text: 'windows',
            position: "Left",
        },
        {
            id: "Space",
            size: 'xxxl',
            text: 'space',
            position: "Right",
        },
        {
            id: "MetaLeft",
            size: 'm',
            text: 'windows',
            position: "Left",
        },
        {
            id: "AltRight",
            size: 'sm',
            text: 'alt',
            position: "Left",
        },

    ],
];



const App = function _App() {
    return `
        <div class="simple-keyboard hg-theme-default hg-layout-default">
        <div class="hg-rows">
        ${keyLayout.map((item, index) => {
        return ` <div class="hg-row">
            ${item.map((item, index) => {
            return `<div class="hg-button ${item.size === 's' ? 'hg-standardBtn' : 'hg-functionBtn'}">
                <span>${item.size === 's' ? item.upper : item.text}</span>
                </div>`
        })}
            </div>
        `
    }
    )
        }
        </div>
        </div >
    `
}


App.state = {
    count: 0,
    increment: () => {
        setState(() => App.state.count++);
    }
};




const updateTree = () => {
    document.getElementById("app").innerHTML = App();
    // On Click Function
    document
        .getElementById("button")
        .addEventListener("click", App.state.increment);
}


// const setState = (callback) => {
//     callback();
//     updateTree(); // extracted function
// }

updateTree();

document.addEventListener('keydown', function (e) {
    // alert("hallo");
    console.log(e);
});