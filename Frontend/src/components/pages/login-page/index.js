import {Box, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";

export default function LoginPage() {
    return (
        <Box sx={{
            width: '100%', height: '100vh', backgroundColor: 'deeppink',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        < /Box>
    );
};
