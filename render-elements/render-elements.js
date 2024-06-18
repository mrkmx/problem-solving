/**
 * A naive implementation of rendering a DOM tree from a JavaScript object.
 * Because recursion and manipulation of the real DOM tree may not be effective,
 * then real libraries use more complex concepts (for example, React Fiber)
 * 
 * https://legacy.reactjs.org/docs/faq-internals.html
 * https://github.com/acdlite/react-fiber-architecture
 */

const markup = {
    type: 'article',
    children: [
        {
            type: 'h1',
            children: [
                {
                    type: 'text',
                    value: 'Header',
                }
            ],
        },
        {
            type: 'p',
            children: [
                {
                    type: 'text',
                    value: 'Paragraph',
                }
            ],
        },
        {
            type: 'button',
            children: [
                {
                    type: 'text',
                    value: 'Button',
                }
            ]
        }
    ]
}

function renderElements(pojoElement, parentDOMNode) {
    const newDOMNode = pojoElement.type === 'text'
        ? document.createTextNode(pojoElement.value)
        : document.createElement(pojoElement.type)

    if (pojoElement?.children?.length) {
        pojoElement.children.forEach(child => {
            renderElements(child, newDOMNode)
        })
    }

    parentDOMNode.appendChild(newDOMNode)
}

const root = document.getElementById('root')
renderElements(markup, root)
