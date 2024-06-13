import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputLoginProps {
    placeorder: string;
    typ: string;
    onChange: (value: String) => void;

};

const InputLogin: React.FC<InputLoginProps> = ({ placeorder, typ, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // typeof event.target.value === typeof `${typ}`? onChange(event.target.value):null;
        // if (typeof event.target.value === typeof typ.valueOf) {
        //     onChange(event.target.value);
        onChange(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
            <InputLabel htmlFor={`outlined-adornment-${typ}`} >{placeorder}</InputLabel>
            <OutlinedInput
                onChange={handleChange}
                color="secondary"
                id={`outlined-adornment-${typ}`}
                type={typ === 'password' ? (showPassword ? 'text' : 'password') : typ}

                endAdornment={typ === 'password' ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ) : null}

                label="Password"
            />
        </FormControl>
    )
}
export default InputLogin