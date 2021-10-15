import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Anas"], ["George", "Pierre Edouard", "George"], ["Edmond", "Edmond", "Michael"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("scrollUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "George", "Pierre Edouard"], ["George", "Edmond", "Anas"], ["Pierre Edouard", "George", "Anas"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.scrollUpdate({ currentTarget: { scrollHeight: 48, scrollY: 987650 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.scrollUpdate({ currentTarget: { scrollHeight: 544, scrollY: 0.0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.scrollUpdate({ currentTarget: { scrollHeight: 6, scrollY: "a1969970175" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.scrollUpdate({ currentTarget: { scrollHeight: 390, scrollY: 56784 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.scrollUpdate({ currentTarget: { scrollHeight: 390, scrollY: -1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.scrollUpdate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
