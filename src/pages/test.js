import React from 'react';
import glamorous from 'glamorous';

const StyledTitle = glamorous.div({
  fontSize: 40,
  textAlign: 'center',
});

class Glamorous extends React.Component {
    render () {
        return (
            <glamorous.Div marginTop={40}>
                <StyledTitle>Hello glamorous world!</StyledTitle>
            </glamorous.Div>
        )
    }
}

export default Glamorous;