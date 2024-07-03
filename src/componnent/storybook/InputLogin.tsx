import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { IInput } from "../interface/IInput";


const InputLogin: React.FC<IInput> = ({ placeorder, nameInput, typ, regexPattern }) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    let patternRegExp: RegExp | undefined;

    if (regexPattern) {
        try {
            patternRegExp = new RegExp(regexPattern);
        } catch (error) {
            console.error(`Invalid regex pattern: ${placeorder}`, error);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (patternRegExp && !patternRegExp.test(value)) {
            setError(true);
            setHelperText('Invalid input');
        } else {
            setError(false);
            setHelperText('');
        }
    };

    return (
        <Grid item xs={12} sm={9}>
            <TextField
                type={typ}
                autoComplete="given-name"
                name={nameInput}
                required = {true}
                fullWidth
                id={nameInput}
                label={placeorder}
                autoFocus
                onChange={handleChange}
                error={error} 
                helperText={helperText} 
                inputProps={{ pattern: patternRegExp?.source }}
                InputProps={{
                    inputProps: {
                        pattern: patternRegExp?.source,
                        title: "Enter a valid input",
                    },
                }}
            />
        </Grid>
    );
};

export default InputLogin;