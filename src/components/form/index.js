import React, {Component} from 'react';
import {View} from 'react-native';
import Input from './input';

export default class Form extends Component {
    // static propTypes = {
    //     fields: 'array',
    //     onChange: 'optional|function',
    //     error: 'optional|Err',
    //     initialValues: 'object',
    // };

    constructor(props) {
        super(props);

        const data = {};

        const initial = props.initialValues || {};
        props.fields.forEach(field => {
            data[field.name] = field.initialValue || initial[field.name] || null;
        });

        this.state = {data:data, focus: false,};
    }

    onFieldChange(field, value) {
        const {onChange} = this.props;

        if (field.disabled) {
            return;
        }

        this.setState(state => {
            state.data[field.name] = value;

            return state;

        }, () => {

            // field on change
            if (field.onChange) {
                field.onChange(value);
            }

            // form on change
            if (onChange) {
                onChange(this.state.data);
            }
        });
    }

    getFieldError(name) {
        const {error, errorPrefix} = this.props;

        if (error && error.code === 'VALIDATION_ERROR' && error.formErrors) {

            let errorName = errorPrefix ? errorPrefix + name : name;

            return error.formErrors[errorName];
        }

        return null;
    }

    onFocus(){
        this.setState({
            focus: true,
        })
    }
    onBlur(){
        this.setState({
            focus: false,
        })
    }

    render() {
        const {fields, } = this.props;

        const fieldEls = fields.map(field => {
            if (!field) {
                return null;
            }

            return (
                <Input
                    {...field}
                    type={field.type || 'text'}
                    error={this.getFieldError(field.name)}
                    focus={this.state.focus}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    onChange={(value) => this.onFieldChange(field, value)}
                    value={this.state.data[field.name]}
                />
            );
        });

        return (
            <View>
                {fieldEls}
            </View>
        )
    }
}