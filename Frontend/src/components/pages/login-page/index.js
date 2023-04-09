import {Box, Button, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import {useRouter} from "next/router";

export default function LoginPage() {
    const router = useRouter();
    return (
        <Box sx={{
            width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">Input your password</FormHelperText>
            </FormControl>
            <Button variant={'outlined'} onClick={()=>{router.push('./main')}} >LOGIN</Button>
        < /Box>
    );
};
