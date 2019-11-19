import React from 'react';

import TextInput from './textInput';


export default function ({type, ...rest}) {
    if (type === 'text') {
        return <TextInput {...rest} />

    } else {
        console.error('Invalid input type ' + type);
    }
}