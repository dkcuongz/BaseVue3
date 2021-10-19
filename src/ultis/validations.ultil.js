import {defineRule} from 'vee-validate';

defineRule('required', value => {
    if (!value || !value.length) {
        return 'This field is required';
    }
    return true;
});
defineRule('email', value => {
    // Field is empty, should pass
    if (!value || !value.length) {
        return true;
    }
    // Check if email
    if (!/^([a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/.test(value)) {
        return 'This field must be a valid email';
    }
    return true;
});
defineRule("min", (value, [min]) => {
    if (value && value.length < min) {
        return `Should be at least ${min} characters`;
    }

    return true;
});

defineRule("confirmed", (value, [other]) => {
    if (value !== other) {
        return `Passwords do not match`;
    }
    return true;
});
