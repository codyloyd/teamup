import describe from 'tape';
import React from 'react';
import dom from 'cheerio';
import ReactDOMServer from 'react-dom/server';
import exampleButton from './_example-button';


// See erics videos on why we pass in react to
// to the button first.
const ExampleButton = exampleButton(React);


// This creates a render function that will render our
// our component to a string every time we need to.
const render = ReactDOMServer.renderToStaticMarkup;



// This function creates our buttons
// default props. The function accepts an
// object to override any of the defaults that
// we need to update for each test.
const createButtonProps = ({
    text = 'Not Named',
    disabled = false,
} = {}) => ({
    text, disabled
});


// What are we testing
describe('ExampleButton', nest => {

    // Context: Test with the default Props
    nest.test('...default props', ({ end, equal }) => {
        let msg, actual, expected, output;

        const props = createButtonProps();

        //This loads the rendered product into cheerio.
        const $ = dom.load(render(<ExampleButton { ...props }/>));

        // Based on the context, these tests should pass
        msg = 'the button text should be displayed';
        actual = $('.example-button').html();
        expected = props.text;
        equal(actual, expected, msg);

        msg = 'the button should not have the example-button--disabled class';
        actual = $('.example-button').hasClass('example-button--disabled');
        expected = false;
        equal(actual, expected, msg);

        end();
    });

    nest.test('...disabled is true', ({ end, equal }) => {
        let msg, actual, expected, output;

        const props = createButtonProps({
            disabled: true
        });

        //This loads the rendered product into cheerio.
        const $ = dom.load(render(<ExampleButton { ...props }/>));

        // Based on the context, these tests should pass
        msg = 'the button should have the example-button--disabled class';
        actual = $('.example-button').hasClass('example-button--disabled');
        expected = true;
        equal(actual, expected, msg);

        end();
    });

});
